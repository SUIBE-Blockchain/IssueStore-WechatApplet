// miniprogram/pages/signin/signin.js
const app = getApp()
//用于存储用户输入的个人信息
//用于存储用户唯一的OpenID
var OpenID = getApp().globalData.openid;

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
   // phone:null,
    // year:"",
     name:"",
    // sex:"",
    // health:"",
    //用户个人信息
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
          that.setData({
            [avatarUrl]: res.userInfo.avatarUrl,
            [nickName]: res.userInfo.nickName,
          })
         
        }
      })
  },

//绑定房间
bindTextAreaBlur: function (e) {
  console.log('房间输入完成，携带值为', e.detail.value);
  // 每次更变记录输入的学号，存入inputInfo对象
  this.setData({
    text: e.detail.value
  })
  console.log("hourseId"+this.data.text)
},

  /**
   * 提交按钮
   */
  btnclick: function (e) {
  var that = this;
   var size ;
   size = this.data.identity;
   console.log(this.data.identity)
   
  
   
    if (this.data.text=="") {
      this.setData({
        ErrMessage: "请勿提交空信息"
      })
      return
   }

 
   wx.request({
     url:'https://api.github.com/repos/dengcheng6502/test/issues',
     method:"POST",
     header: {
      'content-type': 'application/json'
    },
    
    data:{
      title:'userInfo.nickName'+"用户的新需求",
      body:this.data.text,
  
    },
    success:function(res){
      console.log(res)
      if(res.data.status == 1){
       
          wx.showModal({
            title: '提示',
            content: '注册成功',
            showCancel: false
          })

     
        wx.switchTab({
          url: '/pages/PersonalCenter/PersonalCenter'
        })
      }
      else{
        wx.showModal({
          title: '提示',
          content:"失败",
          showCancel: false
        })
        
      }
    },
    fail:function(res){
        console.log("失败")
        wx.showModal({
          title: '提示',
          content: "失败",
          showCancel: false
        })
       
    }
   })
       // 进入主界面
   

  },

 
  
  })