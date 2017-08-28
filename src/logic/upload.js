module.exports = class extends think.Logic {
  imageAction() {
      if (this.ctx.file('image').type.split('/')[0] !== 'image') {
          return this.fail(2000, '图片格式不正确');
      }
  }
};
