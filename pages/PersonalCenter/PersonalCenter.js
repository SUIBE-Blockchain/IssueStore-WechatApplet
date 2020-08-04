// pages/PersonalCenter/PersonalCenter.js
Page({
  _handlerTap: function(e) {
   
   
     if(e.currentTarget.id =="message"){
      getApp().globalData.isSetInfo = true
      wx.navigateTo({
        url: '/pages/createIssue/createIssue'
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    cardItems: [
      {
        name: "message",
        title: "提交需求",
        img: "/images/form.png",
        description: "通过此告诉我们您的需求"
      },
     

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})