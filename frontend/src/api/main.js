import request from '@/utils/request'

const ipcApiRoute = {
  test: 'controller.example.test',
  messageShow: 'controller.example.messageShow',
  messageShowConfirm: 'controller.example.messageShowConfirm',
  selectFolder: 'controller.example.selectFolder',
  selectFile: 'controller.example.selectFile',
  openDirectory: 'controller.example.openDirectory',
  socketMessageStart: 'controller.example.socketMessageStart',
  socketMessageStop: 'controller.example.socketMessageStop',
  hello: 'controller.example.hello',
  executeJS: 'controller.example.executeJS',
  loadViewContent: 'controller.example.loadViewContent',
  removeViewContent: 'controller.example.removeViewContent',
  createWindow: 'controller.example.createWindow',
  sendNotification: 'controller.example.sendNotification',
  initPowerMonitor: 'controller.example.initPowerMonitor',
  getScreen: 'controller.example.getScreen',
  openSoftware: 'controller.example.openSoftware',
  openSoftwareWithParam: 'controller.example.openSoftwareWithParam',
  autoLaunch: 'controller.example.autoLaunch',
  setTheme: 'controller.example.setTheme',
  getTheme: 'controller.example.getTheme',
  checkForUpdater: 'controller.example.checkForUpdater',
  downloadApp: 'controller.example.downloadApp',
  dbOperation: 'controller.example.dbOperation',
  uploadFile: 'controller.example.uploadFile',
  writeToFile: 'controller.example.writeToFile',
  listReports: 'controller.example.listReports',
  openFile: 'controller.example.openFile',
  openFolder: 'controller.example.openFolder',
  copyFile: 'controller.example.copyFile',
  execJvdetector: 'controller.detector.execJvdetector',
  listWhiteReports: 'controller.detector.listWhiteReports',
  ipcShowTip: 'controller.backend.ipcShowTip',
  ipcIgnoreTip: 'controller.backend.ipcIgnoreTip'
}

const specialIpcRoute = {
  appUpdater: 'app.updater' // 此频道在后端也有相同定义
}

export {
  ipcApiRoute,
  specialIpcRoute
}