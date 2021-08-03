import { mergeArray, removeArrTarget } from "@/utils/toolUtils"

export default {
  namespaced: true,
  state: {
    loadingWatcher: [],
  },
  getters: {
    loadingWatcher: state => {
      return state.loadingWatcher
    },
  },
  mutations: {
    /* 
      when type is 1, loadingWathcer push the process name，otherwise loadingWathcer remove the process name
      @name [array]: requeset process name
      @type [number]: requeset status: 1 open | 0 close
    */
    loadingWatcher (state, {nameArr, type}) {
      let watcher = state.loadingWatcher  
      if (type == 1) {
          state.loadingWatcher = mergeArray(watcher, nameArr)
      }
      
      if (type == 0) {
          state.loadingWatcher = removeArrTarget(watcher, nameArr)
      }

    },
  }
}
