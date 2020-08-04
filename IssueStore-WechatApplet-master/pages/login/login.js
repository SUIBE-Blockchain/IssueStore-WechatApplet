const app = getApp();
Page({
 
  data: {
    hasUserInfo: false,
    userInfo: null,
    isSetInfo:false
  },
  onLoad: function() {
    this.userAuthorized()
  },
  
  userAuthorized() {
    wx.getSetting({
      success: data => {
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: data => {
              this.setData({
                hasUserInfo: true,
                userInfo: data.userInfo
              })
            }
          })
        } else {
          this.setData({
            hasUserInfo: false
          })
        }
      }
    })
  },
 onCheck(e){
    console.log("游客展示")
    const userInfo = e.detail.userInfo;
    this.setData({
      userInfo: userInfo
    })
    wx.switchTab({url: '../../pages/PersonalCenter/PersonalCenter'})
 },
  onGetUserInfo(e) {
    var that = this;
    console.log("进入了")
    const userInfo = e.detail.userInfo
    if (userInfo) {
      console.log("进入了1")
      // 1. 小程序通过wx.login()获取code
      wx.login({
        success: function(login_res) {
          //获取用户信息
          wx.getUserInfo({
            success: function(info_res) {
              // 2. 小程序通过wx.request()发送code到开发者服务器
              console.log(login_res.code)
                    // 7.小程序存储skey（自定义登录状态）到本地
                    wx.setStorageSync('userInfo', userInfo);
            
                    getApp().globalData.isSetInfo = true,
                    that.setData({
                      isSetInfo:true
                    })
                    console.log(getApp().globalData.isSetInfo);
                    wx.switchTab({
                      url: '/pages/PersonalCenter/PersonalCenter'
                    })
            }
          })
        }
      })
      this.setData({
        hasUserInfo: true,
        userInfo: userInfo,
        isSetInfo:app.globalData.isSetInfo
      })
    }
  }
 
})
 