// miniprogram/pages/signin/signin.js
const app = getApp()
//用于存储用户输入的个人信息
//用于存储用户唯一的OpenID
var OpenID = getApp().globalData.openid;
var userName;

Page({
  mixins: [require('../../mixin/themeChanged')],
  /**
   * 页面的初始数据
   */
  data: {
    isSetInfo:false,
    showTopTips: false,
    identity:null,
    openid:null,
    hourseId:"",
    username:null,
    password:null,
    zhuce:false,
     name:"",
    userInfo: {
      avatarUrl: "", //用户头像
      nickName: "", //用户昵称
    },
    idErr: false,
    nameErr: false,
    classErr: false,
    ErrMessage: "",
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    var that = this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
        success: function (res) {
          console.log(res);
          var avatarUrl = 'userInfo.avatarUrl';
          var nickName = 'userInfo.nickName';
          userName= res.userInfo.nickName;
          that.setData({
            [avatarUrl]: res.userInfo.avatarUrl,
            [nickName]: res.userInfo.nickName,
          })
         
        }
      })
  },

//绑定房间
// bindTextAreaBlur: function (e) {
//   console.log('text输入完成，携带值为', e.detail.value);
//   // 每次更变记录输入的学号，存入inputInfo对象
//   this.setData({
//     text: e.detail.value
//   })
//   console.log("text"+this.data.text)
// },

// bind_money: function (e) {
//   // 每次更变记录输入的学号，存入inputInfo对象
//   this.setData({
//     money: e.detail.value
//   })
//   console.log("money"+this.data.money)
// },


  /**
   * 提交按钮
   */
  formSubmit: function (e) {
    var that = this;
    var body = e.detail.value.body;
    var money=e.detail.value.money;

    if(body==""||money==""){
      wx.showModal({
        title: '提示',
        content: "不可为空",
        showCancel: false
      })
      return
    }
    console.log("request"+e.detail.value.labels)
    wx.showLoading({
      title:'提交中',
      mask:true
    })
   wx.request({
     url:'https://www.99kies.club/api/v1/issuestore',
     method:"POST",
     header: {
      "content-Type": "application/x-www-form-urlencoded"
    },
    data:{
      title:userName+"用户的新需求 "+"赏金"+money,
      body:body,
      money:money,
      labels:e.detail.value.labels
    },
    success:function(res){
      wx.hideLoading()
      console.log(res)
      if(res.data.code==200){
        wx.showModal({
          title: '提示',
          content: '提交成功',
          showCancel: false
        })
  
          wx.switchTab({
            url: '/pages/PersonalCenter/PersonalCenter'
          })
      }
      else{
        wx.hideLoading()
        wx.showModal({
          title: '提示',
          content: '服务器繁忙，请重试',
          showCancel: false
        })
      }
      
      },
    fail:function(res){
      wx.hideLoading()
        console.log("失败")
        wx.showModal({
          title: '提示',
          content: "提交失败",
          showCancel: false
        })
       
    }
   })
       // 进入主界面
   

  },

 
  
  })