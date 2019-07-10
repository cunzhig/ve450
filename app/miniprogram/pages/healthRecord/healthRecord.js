// miniprogram/pages/healthRecord/healthRecord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },



  //添加
  // res: function (e) {
  //   const db = wx.cloud.database()
  //   db.collection('Records').add({
  //     data: {
  //       BPM: parseInt(e.detail.value.pulse),
  //       NIBP_H: parseInt(e.detail.value.hpressure),
  //       NIBP_L: parseInt(e.detail.value.lpressure),
  //       SpO2: parseInt(e.detail.value.oxygen),
  //       temp: parseFloat(e.detail.value.temp),
  //       date: db.serverDate(),
  //     },
  //     success: res => {
  //       // 在返回结果中会包含新创建的记录的 _id
  //       this.setData({
  //         BPM: parseInt(e.detail.value.pulse),
  //         NIBP_H: parseInt(e.detail.value.hpressure),
  //         NIBP_L: parseInt(e.detail.value.lpressure),
  //         SpO2: parseInt(e.detail.value.oxygen),
  //         temp: parswFloat(e.detail.value.temp),
  //         date: db.serverDate(),
  //       })
  //       wx.showToast({
  //         title: '新增记录成功',
  //       })
  //       console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
  //     },
  //     fail: err => {
  //       wx.showToast({
  //         icon: 'none',
  //         title: '新增记录失败'
  //       })
  //       console.error('[数据库] [新增记录] 失败：', err)
  //     }
  //   })
  // },



  //添加
  res: function (e) {
    const db = wx.cloud.database()
    db.collection('Records').add({
      data: {
        BPM: parseInt(e.detail.value.pulse),
        NIBP_H: parseInt(e.detail.value.hpressure),
        NIBP_L: parseInt(e.detail.value.lpressure),
        SpO2: parseInt(e.detail.value.oxygen),
        temp: parseFloat(e.detail.value.temp),
        date: db.serverDate(),
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          BPM: parseInt(e.detail.value.pulse),
          NIBP_H: parseInt(e.detail.value.hpressure),
          NIBP_L: parseInt(e.detail.value.lpressure),
          SpO2: parseInt(e.detail.value.oxygen),
          temp: parseFloat(e.detail.value.temp),
          date: db.serverDate(),
        })
        wx.showToast({
          title: 'Successful',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: 'Failed'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },

})