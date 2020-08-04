// pages/waiter/waiter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  contact:function(){
    wx.makePhoneCall({
      phoneNumber: '18024376575' 
    })
  },
  clickOpinion2: function () {
    wx.navigateTo({
      url: '/pages/opinion2/opinion2'
    })
  },
  getAllIssue:function(e){
     wx.request({
       url: 'https://github.com/SUIBE-Blockchain/FISCO_BCOS_Toolbox/issues',
       method:"GET",
       header: {
        'Accept': 'application/vnd.github.v3+json'
      }
     })
     console.log(e)
  },
  returns: function(){
    wx.redirectTo({
      url: '/pages/login/login'
    })
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