import algoliasearch from "algoliasearch";

const client = algoliasearch(
  process.env.VUE_APP_ALGOLIA_APP_ID,
  process.env.VUE_APP_ALGOLIA_API_KEY
);

const state = {
  filters: {
    credits: null,
    departments: null,
  },
  courses: [],
};

const getters = {
  getFilters(state) {
    return state.filters;
  },
  getSearchedCourses(state) {
    return state.courses.filter((course) => course.isSearchResult);
  },
  getSavedCourses(state) {
    return state.courses.filter((course) => course.isSaved);
  },
};

const actions = {
  getFilters({ commit }) {
    client
      .initIndex("prod_COURSES")
      .search("", { distinct: 1 })
      .then(({ hits }) => {
        commit("SET_FILTER", {
          departments: {
            title: "Departamentos",
            options: hits.map(({ departmentId, departmentTitle }) => ({
              id: departmentId,
              title: departmentTitle,
            })),
          },
        });
      });

    client
      .initIndex("prod_CLASSES")
      .search("", { distinct: 1 })
      .then(({ hits }) => {
        commit("SET_FILTER", {
          credits: {
            title: "Créditos",
            options: hits.map(({ timeLoad }) => {
              const credits = timeLoad / 15;
              const grammaticalNumber = credits === 1 ? "crédito" : "créditos";

              return {
                id: timeLoad,
                title: `${credits} ${grammaticalNumber} (${timeLoad}h)`,
                credits,
              };
            }),
          },
        });
      });
  },
  searchCourses({ commit }, { text, credits, departments }) {
    if (!text) return;

    credits;
    departments;

    const queries = [
      {
        indexName: "prod_COURSES",
        query: text,
        params: {
          hitsPerPage: 20,
        },
      },
    ];

    client
      .multipleQueries(queries)
      .then(({ results }) => commit("SET_SEARCH_RESULTS", results));
  },

  saveCourse({ commit }) {
    commit("SAVE_COURSE");
  },
  clearSearchResults({ commit }) {
    commit("SET_SEARCH_RESULTS");
  },
};

const mutations = {
  // SAVE_COURSE(state) {
  //   // ...
  // },
  SET_FILTER(state, filter) {
    Object.assign(state.filters, filter);
    // console.log(state.filters);
  },
  SET_SEARCH_RESULTS(state, results) {
    state;
    console.log(results);
  },
  CLEAR_SEARCH_RESULTS(state) {
    state.courses.forEach((course, index) => {
      if (course.isSaved) {
        state.courses[index].isSearchResult = false;
      } else {
        state.course.splice(index, 1);
      }
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
