(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{293:function(t,s,a){"use strict";a.r(s);var n=a(29),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"二、购买阿里云，并在阿里云服务器上配置git下载、node项目等运行环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、购买阿里云，并在阿里云服务器上配置git下载、node项目等运行环境"}},[t._v("#")]),t._v(" 二、购买阿里云，并在阿里云服务器上配置Git下载、node项目等运行环境")]),t._v(" "),a("ul",[a("li",[t._v("图片显示有问题的可点击链接查看"),a("a",{attrs:{href:"https://blog.csdn.net/sinat_36146776/article/details/93604788",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客原文"),a("OutboundLink")],1)])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1、获取服务器"}},[t._v("1、获取服务器")])]),a("li",[a("a",{attrs:{href:"#_2、连接上服务器"}},[t._v("2、连接上服务器")])]),a("li",[a("a",{attrs:{href:"#_3、配置服务器环境"}},[t._v("3、配置服务器环境")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"_1、获取服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、获取服务器"}},[t._v("#")]),t._v(" 1、获取服务器")]),t._v(" "),a("p",[t._v("在阿里云官网上注册后进行实名验证，验证需要几天。验证成功后\n购买，"),a("a",{attrs:{href:"https://ecs-buy.aliyun.com/wizard?spm=5176.8789780.1092585.1.72b955caBnrK2M#/prepay/cn-hongkong?periodType=Yearly&period=1&instanceType=ecs.g5.large",target:"_blank",rel:"noopener noreferrer"}},[t._v("购买地址"),a("OutboundLink")],1),t._v("，初学者入门级一般选择'CentOS'，我选择的是CentOS，地域等其他的都自选，自己玩的话肯定选个最便宜的。购买成功后会受到相应的短信，信息如下")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190625104117387.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpbmF0XzM2MTQ2Nzc2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("在阿里云控制台中“云服务器ECS/实例与镜像/实例/实例列表中可以看到你购买的实例列表”\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019062510493065.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpbmF0XzM2MTQ2Nzc2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"_2、连接上服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、连接上服务器"}},[t._v("#")]),t._v(" 2、连接上服务器")]),t._v(" "),a("p",[t._v("我们想要在服务器上操作部署项目，首先要连接上服务器，有常见两种方式，一种是直接远程连接，在浏览器窗口打开DOS控制台，见"),a("a",{attrs:{href:"https://blog.csdn.net/sinat_36146776/article/details/92810252",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),a("OutboundLink")],1),t._v("；另外一种是通过三方软件连接，见"),a("a",{attrs:{href:"https://blog.csdn.net/sinat_36146776/article/details/92817913",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接"),a("OutboundLink")],1),t._v("。\n这两种方式都是使用liunx命令对服务器进行操作，所以操作步骤是一样的。连接成功后有如下信息标志。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019062510565473.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpbmF0XzM2MTQ2Nzc2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"_3、配置服务器环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、配置服务器环境"}},[t._v("#")]),t._v(" 3、配置服务器环境")]),t._v(" "),a("ul",[a("li",[t._v('(1)、配置git环境\n首先新建两个文件夹"jane-code","jane-soft"分别用于存放部署的项目代码和安装的软件，其他如“bin,boot.....”等文件夹问为项目自带。初次接触我不清楚这些文件有何作用，因此建议我们不要动这些文件夹。\n'),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190625110113354.png",alt:"在这里插入图片描述"}})])]),t._v(" "),a("p",[t._v("在服务器上安装git，通过yum加命令来安装，阿里云服务器CentOS7已经为我们配置好了yum，直接用即可。需要注意的是，CentOS5的版本，由于yum源中没有git，所以需要预先安装一系列的依赖包。具体方法可参照下面node安装的方法。")]),t._v(" "),a("blockquote",[a("p",[t._v("yum是linux中比较常用的负责软件包的管理工具和命令,是我们使用linux系统必备的技能和工具。Yum是一个在Fedora和RedHat以及CentOS中的Shell前端软件包管理器。基于RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yum -y install git\n//yum remove git //卸载方法\n")])])]),a("p",[t._v("在安装软件的时候，会有中断，让用户选择是否要继续，输入y表示yes在enter即可完成安装。")]),t._v(" "),a("ul",[a("li",[t._v("(2)、配置node环境\n因为我们从官网下下载来的安装包一般都是压缩过的，所以我们需要安装压缩工具来进行解压。")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//下载压缩工具")]),t._v("\nyum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y install pcre pcre"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("devel\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//在"jane-soft"目录下下载node。下载地址在官网，鼠标经过下载地址即可查看到')]),t._v("\nwget https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nodejs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("v10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("linux"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("x64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//解压")]),t._v("\ntar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xvf node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("linux"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("x64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//重命名")]),t._v("\nmv node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.0")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//配置软连接，作用是让node,npm全局使用")]),t._v("\nln "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("jane"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("soft"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node\nln "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("jane"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("soft"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("npm\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'/jane-soft/node-v10.16/bin/npm'为下载软件解压后的目录")]),t._v("\n")])])]),a("p",[t._v("npm node显示绿色即表示全局配置成功。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190625112439236.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("如果为红色，表示配置不成功，重新配置时，报错：failed to remove ‘node’: Not a directory，需要删除node再配置。删除，需要先cd /usr/local/bin 再 rm node 输入y即可实现删除配置。输入ls则看不见报错的node。再重新配置")]),t._v(" "),a("ul",[a("li",[t._v("(3)、配置yarn")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//切换目录")]),t._v("\ncd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("jane"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("soft\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//下载压缩包")]),t._v("\nwget https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("yarnpkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("latest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//解压到当前目录")]),t._v("\ntar zvxf latest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//配置")]),t._v("\nln "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("jane"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("soft"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("yarn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("yarn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("yarn\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//检测")]),t._v("\nyarn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("version\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//或者，如果你已经全局安装了npm")]),t._v("\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global yarn\n")])])]),a("ul",[a("li",[t._v("(4)、安装mysql")]),t._v(" "),a("li",[t._v("(5)、想要navicat等数据库操作工具能远程连接上自己服务器上的数据库\n阿里云配置安全组/配置规则/添加安全组规则/协议类型：MySQL(3306)设置成功后， 即可连接mysql。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yum install mysql-server\n")])])]),a("ul",[a("li",[t._v("(6)、配置pm2\npm2的作用是防止nodejs文件运行失败后自动重启\n阿里云配置安全组/配置规则/添加安全组规则/协议类型：MySQL(3306)设置成功后， 即可连接mysql。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190625153630480.png",alt:"在这里插入图片描述"}})])]),t._v(" "),a("p",[t._v("复制如图目录，配置软连接\nln -s /jane-soft/node-v10.16/lib/node_modules/pm2/bin/pm2 /usr/local/bin\npm2 list 检测是否成功，下图是成功标志\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190625153658571.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpbmF0XzM2MTQ2Nzc2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("4、其他")]),t._v(" "),a("ul",[a("li",[t._v("Linux常见命令")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vim test.txt 新建txt文件\n进入编辑界面 ，如何保存并退出？\n先按ESC，然后再输入:wq ，再按enter即可退出\nclear 清空控制台记录\nvi test.txt 编辑文件 ，再按i即可进行编辑\nrm test.txt , y 删除文件 \nls 查看当前目录\ncd home 切换到home目录下\ncd .. 切换到上一级目录\ncd 切换到最高级目录\nmkdir first 新建文件夹\nrmdir first 删除文件夹\nrm -fr * 删除当前目录下所有文件\nmv node-v10.16.0 node-v10.16 重命名\n")])])]),a("ul",[a("li",[a("p",[t._v("Linux服务器断开SSH连接后，让程序不退出继续在后台执行\nyum install screen\nyarn run run-pro 启动即可")])]),t._v(" "),a("li",[a("p",[t._v('liunx占用端口并关闭\nyum install lsof\nlsof -i 8080\nkill -9 "关联的pid"\n或者\nps -ef | grep 4000')])])]),t._v(" "),a("p",[t._v("关于在服务器上如何下载项目并运行项目可查看我下一篇文章。。\n"),a("a",{attrs:{href:"https://blog.csdn.net/sinat_36146776/article/details/93607884",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何在服务器上运行node项目"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);