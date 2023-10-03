const { default: BaseService } = require("../api/BaseService");
import { getRandomSlugs, slug } from "../api/slug";
import { showToast } from "../helper/toast";
import { setNewsList, setSearchNewsList, setSearchResult, setTotalResult } from "../redux/actions/listAction";
import { store } from "../redux/store";

class NewsService extends BaseService {

  _getList = async () => {

    const myslug = getRandomSlugs()
    console.log(myslug);
    await this.get(myslug).then(res => {
      if (res.totalResults > 0) {
        store.dispatch(setNewsList(res.articles))
        store.dispatch(setTotalResult(res.totalResults))
        return Promise.resolve(true)
      } else {
        return Promise.reject(false)
      }

    }, err => {
      if (err?.message) {
        alert(err?.message)
      } else {
        alert(JSON.stringify(err?.data))
      }
      return Promise.reject(false)
    })
  }

  _searchNews = (searchText) => {
    const news = store.getState().listReducer.news

    let filteredData = news.filter(function (item) {
      if (item?.title?.toLowerCase().includes(searchText.toLowerCase())) {
        return item.title.toLowerCase().includes(searchText.toLowerCase())
      } else if (item?.author?.toLowerCase().includes(searchText.toLowerCase())) {
        return item.author.toLowerCase().includes(searchText.toLowerCase())
      } else if (item?.description?.toLowerCase().includes(searchText.toLowerCase())) {
        return item.description.toLowerCase().includes(searchText.toLowerCase())
      } else if (item?.source.name?.toLowerCase().includes(searchText.toLowerCase())) {
        return item.source.name.toLowerCase().includes(searchText.toLowerCase())
      }
    });

    // console.log(filteredData.length);
    store.dispatch(setSearchNewsList(filteredData))
    store.dispatch(setSearchResult(filteredData.length))
  }

  _cancelSearch() {
    const { news, totalResult } = store.getState().listReducer

    store.dispatch(setSearchNewsList([]))
    store.dispatch(setSearchResult(0))
    store.dispatch(setNewsList(news))
    store.dispatch(setTotalResult(totalResult))
  }

  async _updateNewsItem(value, index) {
    if (!index) {
      return
    }
    const news = store.getState().listReducer.news
    news[index].description = value
    store.dispatch(setNewsList(news))
    showToast("Description updated.")
  }

}

export default new NewsService()