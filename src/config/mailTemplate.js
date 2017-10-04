export function template(email, code) {
    return `
<style>.qmbox table {border-collapse:separate;} .qmbox a, .qmbox a:link, .qmbox a:visited {text-decoration: none; color: #00AEFF;} .qmbox a:hover {text-decoration: none;} .qmbox h2,.qmbox h2 a,.qmbox h2 a:visited,.qmbox h3,.qmbox h3 a,.qmbox h3 a:visited,.qmbox h4,.qmbox h5,.qmbox h6,.qmbox .t_cht {color:#000 !important;} .qmbox p {margin-bottom: 0;} .qmbox .ExternalClass p, .qmbox .ExternalClass span, .qmbox .ExternalClass font, .qmbox .ExternalClass td {line-height: 100%;} /**This is to center your email in Outlook.com************/ .qmbox .ExternalClass {width: 100%;} .qmbox a { color: #00AEFF; text-decoration: none; } .qmbox * { font-family: '微软雅黑', 'Microsoft YaHei', 'Hei SC', 'Arial', sans-serif; } </style><div style="font-family: '微软雅黑', 'Microsoft YaHei', 'Hei SC', 'Arial', sans-serif;text-align: left; background-color: #242D3D; border-top-width: 1px; border-top-style: solid; border-top-color: #3E424E; color: #BFC1C5; padding: 0 30px 0 30px;">
    <table class="" style="" border="0" cellpadding="0" cellspacing="0" width="100%" height="">
        <tbody>
        <tr>
            <td style="font-family: '微软雅黑', 'Microsoft YaHei', 'Hei SC', 'Arial', sans-serif;font-weight: 200; font-size: 28px; color: #FFFFFF; padding: 40px 0; margin: 0px 0px 0px 0px; display: block;">
                <div>您好 ${email}！</div>
                <div>以下是您的验证码：</div>
            </td>
        </tr>
        </tbody>
    </table>
    <table class=""
           style="font-family: '微软雅黑', 'Microsoft YaHei', 'Hei SC', 'Arial', sans-serif;padding-bottom: 20px;"
           border="0" cellpadding="0" cellspacing="0" width="100%" height="">
        <tbody>
        <tr>
            <td>
                <em style="font-family: '微软雅黑', 'Microsoft YaHei', 'Hei SC', 'Arial', sans-serif;font-size: 28px; font-weight: 300; color: #3ed500; font-style: normal;">${code}</em>
            </td>
        </tr>
        </tbody>
    </table>
    <table class="" style="" border="0" cellpadding="0" cellspacing="0" width="100%" height="">
        <tbody>
        <tr>
            <td style="font-family: '微软雅黑', 'Microsoft YaHei', 'Hei SC', 'Arial', sans-serif;padding: 0 0 20px 0; margin: 0px 0px 0px 0px; color: #BFC1C5; display: inline-block; -webkit-font-smoothing: antialiased;">
                <i><b>请注意：</b>该验证码将在15分钟后过期，请尽快验证！</i></td>
        </tr>
        </tbody>
    </table>
</div>`;
}