<template>
  <div id="app-base-file">
    <div class="one-block-2">
      <a-space style="margin: 5px; font-weight: bold">
        <span>网站入口</span>
        <a-input v-model="url" placeholder="URL">
          <a-select
            slot="addonBefore"
            v-model="schema"
            default-value="https://"
            style="width: 80px"
          >
            <a-select-option value="http://"> Http:// </a-select-option>
            <a-select-option value="https://"> Https:// </a-select-option>
          </a-select>
        </a-input>
        <span>浏览器</span>
        <a-select
          v-model="browser"
          default-value="FireFox"
          style="width: 90px"
        >
          <a-select-option value="FireFox"> FireFox </a-select-option>
          <a-select-option value="Chrome"> Chrome </a-select-option>
        </a-select>
        <span>浏览器宽高
        <a-input
          v-model="view_w"
          style="width: 40px"
        ></a-input>
        <a-input
          v-model="view_h"
          style="width: 40px"
        ></a-input>px</span>
      </a-space>
    </div>

    <div class="one-block-2">
      <a-space style="margin: 5px; font-weight: bold">
        <span>爬虫线程  
        <a-input-number v-model="threads" :min="1" :max="100" style="width:60px"/></span>
        <span>送信间隔
        <a-input-number v-model="interval" :min="0" :max="100" style="width:60px"/>s</span>
        <span>爬虫超时
        <a-input-number v-model="target_info.timeout" :min="0" style="width:80px" :disabled="!timeout"/>s</span>
        <span>开启爬虫超时
        <a-switch v-model="timeout" /></span>
        <span>单独导出报告
        <a-switch v-model="seperate_report" /></span>
        <span>人工输入
        <a-switch v-model="human_login" /></span>
      </a-space>
    </div>

    <div class="one-block-2">
      <a-space style="margin: 5px; font-weight: bold">
        <span>用户密码</span>
        <a-switch @change="authChange" />
        <a-form layout="inline" :form="form" @submit="handleSubmit">
          <a-form-item
            :validate-status="userNameError() ? 'error' : ''"
            :help="userNameError() || ''"
          >
            <a-input
              v-decorator="[
                'userName',
                { rules: [{ required: true, message: '请输入用户名' }] },
              ]"
              :disabled="noAuth"
              placeholder="用户名"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item
            :validate-status="passwordError() ? 'error' : ''"
            :help="passwordError() || ''"
          >
            <a-input
              v-decorator="[
                'password',
                { rules: [{ required: true, message: '请输入密码' }] },
              ]"
              :disabled="noAuth"
              type="password"
              placeholder="密码"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              :disabled="noAuth || hasErrors(form.getFieldsError())"
            >
              提交
            </a-button>
          </a-form-item>
        </a-form>
      </a-space>
    </div>

    <div class="one-block-2">
      <a-space style="margin: 5px; font-weight: bold">
        <span>批量导入URL</span>
        <a-switch @change="csvChange" />
        CSV文件
        <a-input
          v-model="csv_file"
          :disabled="!csvFlag"
          placeholder="xxx.csv"
        ></a-input>
        <a-button :disabled="!csvFlag" @click="selectFile"> 选择文件 </a-button>
        <a-button :disabled="!csvFlag" @click="downloadExapmle"> 模板下载 </a-button>
      </a-space>
    </div>

    <div class="one-block-2" style="width: 720px">
      <a-row :gutter="[0, 16]">
        <a-col :span="8">
          <a-card title="短信相关漏洞" style="width: 225px; height: 300px">
            <a-switch
              slot="extra"
              checked-children="全选"
              un-checked-children="否"
              default-checked
              style="width: 57px"
              @change="smsAllCheck"
            />
            <a-checkbox-group v-model="sms_state">
              <a-row v-for="value in smsVul" :key="value">
                <a-col :span="12">
                  <a-checkbox :value="value" style="width: 200px">{{
                    value
                  }}</a-checkbox>
                </a-col>
              </a-row>
            </a-checkbox-group>
          </a-card>
        </a-col>

        <a-col :span="8">
          <a-card title="验证码相关漏洞" style="width: 225px; height: 300px">
            <a-switch
              slot="extra"
              checked-children="全选"
              un-checked-children="否"
              default-checked
              style="width: 57px"
              @change="capAllCheck"
            />
            <a-checkbox-group v-model="cap_state">
              <a-row v-for="value in captchaVul" :key="value">
                <a-col :span="12">
                  <a-checkbox :value="value" style="width: 200px">{{
                    value
                  }}</a-checkbox>
                </a-col>
              </a-row>
            </a-checkbox-group>
          </a-card>
        </a-col>

        <a-col :span="8">
          <a-card title="其他漏洞" style="width: 225px; height: 300px">
            <a-switch
              slot="extra"
              checked-children="全选"
              un-checked-children="否"
              default-checked
              style="width: 57px"
              @change="otherAllCheck"
            />
            <a-checkbox-group v-model="other_state">
              <a-row v-for="value in otherVul" :key="value">
                <a-col :span="12">
                  <a-checkbox :value="value" style="width: 200px">{{
                    value
                  }}</a-checkbox>
                </a-col>
              </a-row>
            </a-checkbox-group>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <div class="one-block-2">
      <a-button type="primary" icon="save" @click="saveConfig">
        保存配置
      </a-button>
    </div>
  </div>
</template>
<script>
import { ipcApiRoute } from "@/api/main";
import { vulOptions } from "@/utils/vulConfig";
const fs = require("fs");

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

const smsVul = [
  "短信轰炸",
  "短信验证码重复利用",
  "短信验证码未绑定",
  "短信验证码返回到前端",
  "短信内容可控",
  "短信验证码机制可以被绕过",
  "短信验证码可爆破",
];

const captchaVul = [
  "图形验证码返回到前端",
  "验证码机制过于简单",
  "验证码长度可控",
  "验证码可识别",
  "验证码可重复利用",
  "邮件验证码安全",
  "无图形验证码功能",
  "图形验证码机制可以被绕过",
  "前端可控的验证码生成机制",
];

const otherVul = [
  "登录认证可被绕过",
  "更改密码时不需要输入原密码*",
  "会话令牌不应写入URL",
  "用户密码重置",
  //"任意文件下载",
  // "文件上传漏洞*",
  // "越权漏洞",
  // "未授权访问",
  "重放",
];

const httpRegx = new RegExp("^https?:\\/\\/.*$", "i");

export default {
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "horizontal_login" }),
      url: "",
      schema: "https://",
      browser: "FireFox",
      view_w: 0,
      view_h: 0,
      noAuth: true,
      seperate_report: false,
      human_login: true,
      timeout: false,
      target_info: {
        url: "",
        browser: 0,
        viewport: {},
        username: "",
        password: "",
        csv_file: "",
        modules: [],
        threads: 8,
        interval: 0,
        timeout: 18000,
        seperate_report_flag: "",
        human_login_flag:""
      },
      threads: 8,
      interval: 0,
      smsVul,
      captchaVul,
      otherVul,
      sms_state: smsVul,
      cap_state: captchaVul,
      other_state: otherVul,
      csv_file: "",
      csvFlag: false,
    };
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return (
        !this.noAuth && isFieldTouched("userName") && getFieldError("userName")
      );
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return (
        !this.noAuth && isFieldTouched("password") && getFieldError("password")
      );
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.target_info.username = values.userName;
          this.target_info.password = values.password;
        }
      });
    },
    authChange(checked) {
      console.log(`a-switch to ${checked}`);
      this.noAuth = !checked;
    },
    csvChange(checked) {
      console.log(`a-switch to ${checked}`);
      this.csvFlag = checked;
    },
    smsAllCheck(checked) {
      this.sms_state = checked ? smsVul : [];
    },
    capAllCheck(checked) {
      this.cap_state = checked ? captchaVul : [];
    },
    otherAllCheck(checked) {
      this.other_state = checked ? otherVul : [];
    },
    selectFile() {
      this.$ipcCall(ipcApiRoute.selectFile, "").then((r) => {
        this.csv_file = r;
        this.$message.info(r);
      });
    },
    downloadExapmle(){
      let args = [".\\LogicDetector\\example.csv",""]
      this.$ipcCall(ipcApiRoute.selectFolder, "").then((r) => {
        args[1] = r+"\\example.csv";
        this.$ipcCall(ipcApiRoute.copyFile, args).then((r) => {
          if (r == true){
            this.$message.info("文件已下载到指定目录！");
          }else{
            this.$message.error("文件下载失败！");
          }
        });
      });
    },
    saveConfig() {
      if (this.url == "" && (this.csvFlag == false || this.csv_file == "")) {
        this.$message.error("请输入目标网址或CSV文件");
        return;
      }
      if(this.browser == "Chrome"){
        this.target_info.browser = 1;
      }else{
        this.target_info.browser = 0;
      }
      if(this.view_w > 0 && this.view_h > 0){
        this.target_info.viewport = {"width": parseInt(this.view_w), "height": parseInt(this.view_h)};
      }else{
        this.target_info.viewport = {};
      }
      this.target_info.threads = this.threads;
      this.target_info.interval = this.interval;
      if(this.csvFlag != false){
        this.target_info.csv_file = this.csv_file;
      }else{
        this.target_info.csv_file = "";
      }
      this.target_info.url = httpRegx.test(this.url)
        ? this.url
        : this.schema + this.url;
      if (this.seperate_report == true ){
        this.target_info.seperate_report_flag = "true";
      }else{
        this.target_info.seperate_report_flag = "";
      }
      if (this.human_login == true ){
        this.target_info.human_login_flag = "true";
      }else{
        this.target_info.human_login_flag = "";
      }
      if (this.timeout != true){
        this.target_info.timeout = -1;
      }
      console.log("Save url: ,", this.target_info.url);
      this.target_info.modules = [];
      for (const v of this.sms_state) {
        let ov = v;
        if (v.endsWith("*")) {
          ov = v.substr(0, v.length - 1);
        }
        for (const key of vulOptions[ov]) this.target_info.modules.push(key);
      }
      for (const v of this.cap_state) {
        let ov = v;
        if (v.endsWith("*")) {
          ov = v.substr(0, v.length - 1);
        }
        for (const key of vulOptions[ov]) this.target_info.modules.push(key);
      }
      console.log(JSON.stringify(this.other_state));
      for (const v of this.other_state) {
        let ov = v;
        if (v.endsWith("*")) {
          ov = v.substr(0, v.length - 1);
        }
        console.log(ov);

        for (const key of vulOptions[ov]) this.target_info.modules.push(key);
      }
      // console.log("Save config: ", JSON.stringify(this.target_info));
      const data = JSON.stringify(this.target_info);
      const args = {
        filename: ".\\LogicDetector\\options.json",
        data: data,
      };
      this.$ipcCall(ipcApiRoute.writeToFile, args).then((res) => {
        if (res) {
          console.log("write success.");
          this.$message.success("配置已保存");
        } else {
          this.$message.error("配置保存失败");
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
#app-base-file {
  padding: 0px 10px;
  text-align: left;
  width: 100%;
  .one-block-1 {
    font-size: 16px;
    font-weight: bold;
    padding-top: 10px;
  }
  .one-block-2 {
    padding-top: 10px;
    width: 720px;
  }
  .footer {
    padding-top: 10px;
  }
}
</style>
