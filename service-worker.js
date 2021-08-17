/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "293c346ba67eddf64a37ef7707ff0288"
  },
  {
    "url": "advanced/algorithm/index.html",
    "revision": "0eec4855405e35ebc4f97e714aea708b"
  },
  {
    "url": "advanced/patterns/index.html",
    "revision": "b408e35431771cee7b570f1191b16ee1"
  },
  {
    "url": "algorithm/01-learning-guide.html",
    "revision": "9353f8cc307bc7657fb76e4de7e205a3"
  },
  {
    "url": "algorithm/02-base.html",
    "revision": "21459d65ea22bd77c93519ea287f40c3"
  },
  {
    "url": "algorithm/03-stack.html",
    "revision": "3603c7541e556e6fd8c1173b2444f2d9"
  },
  {
    "url": "algorithm/index.html",
    "revision": "34a66586f300987c21ed0e6e568009eb"
  },
  {
    "url": "assets/css/0.styles.83e51879.css",
    "revision": "9859ef98991e2778942a5eaa99b11d83"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8506b9fc.js",
    "revision": "50c9e5132dc43c43037cf2bd3fdc4a53"
  },
  {
    "url": "assets/js/11.2ac88bab.js",
    "revision": "e42c7c79ab2826d34358cc40e9b6c350"
  },
  {
    "url": "assets/js/12.ae3ae057.js",
    "revision": "1bce3d0ca3c88b186bf08451146ec7d6"
  },
  {
    "url": "assets/js/13.4a7cb9d2.js",
    "revision": "384cff7a598ffd160fc00d2ae83b3ff0"
  },
  {
    "url": "assets/js/14.50a65c01.js",
    "revision": "67eea25b19739427f6f8bcdf060801a6"
  },
  {
    "url": "assets/js/15.2c09bf95.js",
    "revision": "c25e8ed7476e22200732264a0e5999ff"
  },
  {
    "url": "assets/js/16.fe1d8458.js",
    "revision": "6fd5b34fd2cf5185e6554ca99f33056f"
  },
  {
    "url": "assets/js/17.76935e2c.js",
    "revision": "ce11f1c4b849086874ecd31d8c9cccd3"
  },
  {
    "url": "assets/js/18.a3e9694d.js",
    "revision": "152bc3a3ade41265c712f97d1282c3ab"
  },
  {
    "url": "assets/js/19.d4d9a945.js",
    "revision": "9d716d527a8e8a310a6ab477f1694ae1"
  },
  {
    "url": "assets/js/2.e1a2e5a6.js",
    "revision": "c9f2165898267c9eb6a171b1d7b7df5d"
  },
  {
    "url": "assets/js/20.c6f91d1d.js",
    "revision": "278535117c4db3227bb58f42991ac4ef"
  },
  {
    "url": "assets/js/21.9daaa140.js",
    "revision": "150a6ca6fb596d7cdaca352d1caca351"
  },
  {
    "url": "assets/js/22.706a5717.js",
    "revision": "63c01ae49f8e21a9f1ad6ef1c14fe165"
  },
  {
    "url": "assets/js/23.b55e5f59.js",
    "revision": "d0cdaa33c17083a61cbe74ffe23d09c5"
  },
  {
    "url": "assets/js/24.e57fd181.js",
    "revision": "e01269b3abb5724a829a6c782bf23ead"
  },
  {
    "url": "assets/js/25.de753c09.js",
    "revision": "3a6e700e3ca482fafd23c6e9678b38ee"
  },
  {
    "url": "assets/js/26.75e03a0a.js",
    "revision": "6e89ac38e9adf84ca298cbf0f8d8b346"
  },
  {
    "url": "assets/js/27.0f39ac24.js",
    "revision": "bdc294b54f80d1991c4146752d6d4566"
  },
  {
    "url": "assets/js/28.b4f1e26a.js",
    "revision": "be8800a9267dafc566279533cfc60762"
  },
  {
    "url": "assets/js/29.7e147ce9.js",
    "revision": "d55bd53df5b18e72eb02639aec8a2265"
  },
  {
    "url": "assets/js/3.fca730b7.js",
    "revision": "bfdccdb3dca11e2695cdf35dc8903c65"
  },
  {
    "url": "assets/js/30.08287792.js",
    "revision": "6330988b20bc930288ed70dfd01edf72"
  },
  {
    "url": "assets/js/31.4a26cbda.js",
    "revision": "22f8ed185b90d6510c3f5df7031795b9"
  },
  {
    "url": "assets/js/32.5b443424.js",
    "revision": "d93a439700ee21bbf4330603ef956ed1"
  },
  {
    "url": "assets/js/33.4fd4b08b.js",
    "revision": "8bb4994b71d04eb17768548c0f32af53"
  },
  {
    "url": "assets/js/34.a31c0f36.js",
    "revision": "3908d92383a14ecda806a19f377e1b68"
  },
  {
    "url": "assets/js/35.88cafe94.js",
    "revision": "3babda2efb6ca2480b2c243f3f938155"
  },
  {
    "url": "assets/js/36.7812381a.js",
    "revision": "72bbc2d350be9510b8d73d451063267b"
  },
  {
    "url": "assets/js/37.5f9f2adb.js",
    "revision": "bd84ca8641737c07ab7f71b2138bd836"
  },
  {
    "url": "assets/js/38.118ba1f4.js",
    "revision": "6c9eaef73e0b17aaf553936fda2d3982"
  },
  {
    "url": "assets/js/39.b67f7277.js",
    "revision": "d1afe4881807f137a9681f308e89c8c9"
  },
  {
    "url": "assets/js/4.9e7532a1.js",
    "revision": "25d6a6f85e7089ed28ebf701f2b52217"
  },
  {
    "url": "assets/js/40.e55debb3.js",
    "revision": "caffe64379d38bc4f8f5c8324b245b20"
  },
  {
    "url": "assets/js/41.d7903d06.js",
    "revision": "bfe104715b65bfa5e86d52f6ee1a6f98"
  },
  {
    "url": "assets/js/42.77614d76.js",
    "revision": "cdda57b489787a3530a23cc4aa87545d"
  },
  {
    "url": "assets/js/43.b81eee3a.js",
    "revision": "400431fbcabf9987268d90fc8873ac18"
  },
  {
    "url": "assets/js/44.4ade92d1.js",
    "revision": "33c208cec00764e4ff10c2bf6acd2738"
  },
  {
    "url": "assets/js/45.8bea4d57.js",
    "revision": "b13e35b09190192dad67db926554a34f"
  },
  {
    "url": "assets/js/46.3bdb04e6.js",
    "revision": "b5118663a907bc224c970081dda12833"
  },
  {
    "url": "assets/js/47.c894c4b2.js",
    "revision": "1181dd02c7734a66ed7e7f65a9b5db5b"
  },
  {
    "url": "assets/js/48.78e60e2b.js",
    "revision": "ea45321af911735c7d6e9f4b249a2cab"
  },
  {
    "url": "assets/js/49.9c5c8f7d.js",
    "revision": "03bc6dd3cbd540c1756e679af76e56b6"
  },
  {
    "url": "assets/js/5.a3c90268.js",
    "revision": "0bf89b3897deac9ad1ad2da37e04d873"
  },
  {
    "url": "assets/js/50.832279c4.js",
    "revision": "d335924068d1b263223042e2abc08f96"
  },
  {
    "url": "assets/js/51.cc16f222.js",
    "revision": "41865bd5f184f7fcb81c89cd04c6b300"
  },
  {
    "url": "assets/js/52.b28aa4d0.js",
    "revision": "4db160d88aadcc2e04c6e6beaa5f2207"
  },
  {
    "url": "assets/js/53.ebabf090.js",
    "revision": "cb6f49be1632cd974079de4899256e90"
  },
  {
    "url": "assets/js/54.28bdfc99.js",
    "revision": "0acb56daee57aa9975d08d308d3dfbdb"
  },
  {
    "url": "assets/js/55.a1b4df06.js",
    "revision": "02bcfeeedc8329f97b78dfc029368384"
  },
  {
    "url": "assets/js/56.6fb0c31d.js",
    "revision": "ad6a8e25b0b98ce475e6a707d26e8e5d"
  },
  {
    "url": "assets/js/57.b9df5c2d.js",
    "revision": "46978da15646a302e6474827437afeec"
  },
  {
    "url": "assets/js/58.47940a92.js",
    "revision": "54bc6b4856cca6de2024add0a1943a04"
  },
  {
    "url": "assets/js/6.4133d95a.js",
    "revision": "fbc9406062320638120cc76ce35f8803"
  },
  {
    "url": "assets/js/7.ea728375.js",
    "revision": "57eef158e1083cae29ef9b94b88cbefe"
  },
  {
    "url": "assets/js/8.b6825a68.js",
    "revision": "d96bf51b9507134e40adcbdcc045d8be"
  },
  {
    "url": "assets/js/9.4d493f14.js",
    "revision": "f3c505b9789be21549d2b4b0e0a96ff3"
  },
  {
    "url": "assets/js/app.f96d0dc8.js",
    "revision": "e9e7c6401da787aa96c2c9a1ca4613a7"
  },
  {
    "url": "guide.html",
    "revision": "912005c62c911fb7edf7dfb6cbb8aa56"
  },
  {
    "url": "images/component/alert.png",
    "revision": "3047c493419375a5646f75bf8fd8a718"
  },
  {
    "url": "images/component/bundle.png",
    "revision": "fafcfb2d014cd15a20a1c1f963eb6e79"
  },
  {
    "url": "images/component/direct.png",
    "revision": "0ad75ff6cca91c79da1f9433c41c8ca8"
  },
  {
    "url": "images/component/docs.png",
    "revision": "32972da9217951deb8674340af3814aa"
  },
  {
    "url": "images/component/examples.png",
    "revision": "c9614a2bdb3b1b3a70055b1c45911044"
  },
  {
    "url": "images/component/fork.png",
    "revision": "357104822f6ed2e448de08d18bc41eaf"
  },
  {
    "url": "images/component/homepage.png",
    "revision": "ae2700c05c9425e1fd274182f28ea5f2"
  },
  {
    "url": "images/component/i8n.png",
    "revision": "484314487a859694dca64c3a355e06ad"
  },
  {
    "url": "images/component/scripts.png",
    "revision": "641180eb794a44254343e33ab1415b10"
  },
  {
    "url": "images/component/src.png",
    "revision": "2105716394c0718d81c4dc04321964d8"
  },
  {
    "url": "images/component/tpl.png",
    "revision": "c7b57b56ed5437d2d4dea857a8f65206"
  },
  {
    "url": "images/git/diff-staged.png",
    "revision": "4288f418cb5d244fdc029e5cc629c1f3"
  },
  {
    "url": "images/git/diff.png",
    "revision": "53e5b9eef6114d58e434487ce66223fc"
  },
  {
    "url": "images/git/header-cli.png",
    "revision": "aa07cd2797b2745a6e967befc8f5172e"
  },
  {
    "url": "images/git/header.gif",
    "revision": "0dfc230ebf4bdfc30fd1ad6bc66bec73"
  },
  {
    "url": "images/git/log-p.png",
    "revision": "3dbc04b09deab003d118acf9c8be19b3"
  },
  {
    "url": "images/git/log-stat.png",
    "revision": "c8ec228012e8b08448389a65dbfa597d"
  },
  {
    "url": "images/git/rebase-commit.png",
    "revision": "07aad45d5ddd3667cfb1bc9fde7e5e7a"
  },
  {
    "url": "images/git/rebase-hard.png",
    "revision": "2c7497edd1743341e50c8fbd68df6c38"
  },
  {
    "url": "images/git/rebase-i-continue.gif",
    "revision": "9176c24c96921ce434cd7a911803f173"
  },
  {
    "url": "images/git/rebase-i-heaer.gif",
    "revision": "9176c24c96921ce434cd7a911803f173"
  },
  {
    "url": "images/git/rebase-i.png",
    "revision": "9a8676df5b7528d8b866c0cc594ab088"
  },
  {
    "url": "images/git/rebase.gif",
    "revision": "b298dc569232272695f0bb3b2e7eba18"
  },
  {
    "url": "images/git/reflog-master.png",
    "revision": "162db1abd8694eb1e6789d46eee8e6d1"
  },
  {
    "url": "images/git/reset.gif",
    "revision": "720ec312e0caa379b75660c84992b019"
  },
  {
    "url": "images/git/show-commit-any.png",
    "revision": "c52532b0ff10b0e190a234ba6553540f"
  },
  {
    "url": "images/git/show-commit.png",
    "revision": "6fb74e9b9072bc917c7abbbf0b07133f"
  },
  {
    "url": "images/gitlab/qiyeweixin.png",
    "revision": "9018f7e42b6895f61a1617d9c6b2bc71"
  },
  {
    "url": "images/gitlab/webhook-test.png",
    "revision": "6836e55a7e77f9c020eeedf3765930b4"
  },
  {
    "url": "images/gitlab/webhook.png",
    "revision": "4fc8bc8c132b9ddbacf15cce3e63bc83"
  },
  {
    "url": "images/js/caniuse.png",
    "revision": "42bbbaa953fe52ae0a95483d8dd96c9a"
  },
  {
    "url": "images/js/js运行流程.png",
    "revision": "78516e3bee443f39adfc84ebadccf80f"
  },
  {
    "url": "images/js/基本类型vs引用类型.png",
    "revision": "0ea41c4a8f2e910e0f6b9b8d93f8270d"
  },
  {
    "url": "images/performance/api.jpg",
    "revision": "1e9213700c524c0a8a862249f53e324a"
  },
  {
    "url": "images/performance/broswer-parse.jpg",
    "revision": "358bd71daf92cafe728a9c341465daa6"
  },
  {
    "url": "images/performance/browser-render.jpg",
    "revision": "fafdbc9a81f0c7a0abe7567096370b00"
  },
  {
    "url": "images/performance/cache-cdn.jpeg",
    "revision": "f767328b52ca210a2f190a99e8cb5d88"
  },
  {
    "url": "images/performance/cache-control.jpeg",
    "revision": "7bfdefdefb50b825208ab1d31b4b9700"
  },
  {
    "url": "images/performance/cache-etag.jpeg",
    "revision": "2f7562cb895bdc4ed6221078a0c21fb5"
  },
  {
    "url": "images/performance/cache-expires.jpeg",
    "revision": "26d1c1169b423b1bea152bcc33de4522"
  },
  {
    "url": "images/performance/cache-if-modified-since.jpeg",
    "revision": "1cfe9f9d0857d31d0300e42f5693d151"
  },
  {
    "url": "images/performance/cache-if-none-match.jpeg",
    "revision": "eb50470bfcba2a5bcbca625ee1f292c7"
  },
  {
    "url": "images/performance/chche-last-modified.jpeg",
    "revision": "ee85f9c8ef47829fbbc39b7dcc1e9104"
  },
  {
    "url": "images/performance/event-loop-flow.jpg",
    "revision": "3e8c6afa1da23259fb55f065da3faddd"
  },
  {
    "url": "images/performance/event-loop-run.jpg",
    "revision": "2cc2bf77153d725e73f912515df585b0"
  },
  {
    "url": "images/performance/first-page.jpg",
    "revision": "c915b776c0f35a6483d383f1b6281c9e"
  },
  {
    "url": "images/performance/google-lighthouse.png",
    "revision": "e510b3d75027cb90b088301ea93450b2"
  },
  {
    "url": "images/performance/light-opport.png",
    "revision": "18022c61c38c1826b2d6dff842052d61"
  },
  {
    "url": "images/performance/light-performance.png",
    "revision": "b5a2c01f9531fa420eeb9b66767f3451"
  },
  {
    "url": "images/performance/lighthouse-load.png",
    "revision": "c735d33c502f4b8035f5e4d940d03dd7"
  },
  {
    "url": "images/performance/lighthouse-plugin.png",
    "revision": "d48914c232b0ef0e3cd356efc1c11233"
  },
  {
    "url": "images/performance/network-analyse.png",
    "revision": "7fa8764c1c38057a174a06b7724d28e8"
  },
  {
    "url": "images/performance/network.png",
    "revision": "11dbc19a5f791d80e2a857d2cb26a9a4"
  },
  {
    "url": "images/performance/performance-analyse.png",
    "revision": "fa6c5c5ef85653c08ed68bf1c4f19f53"
  },
  {
    "url": "images/performance/performance-api.png",
    "revision": "b635e3606c8fd24754877ec1a5ca8b79"
  },
  {
    "url": "images/performance/performance-main-time.png",
    "revision": "102fcec7812bc61f2801ccd076c24acc"
  },
  {
    "url": "images/performance/performance-main.png",
    "revision": "7d05f0bc6cc94204235dbcca9dce7f1c"
  },
  {
    "url": "images/performance/performance-pane.png",
    "revision": "68c1b41dd6e9d86a91f23985eee3265a"
  },
  {
    "url": "images/performance/performance可视化.png",
    "revision": "ba9ae8ea8823ee636ae15140882f70e4"
  },
  {
    "url": "images/performance/performance案例分析.jpg",
    "revision": "9dabeb49c53af0728539b54fa0184285"
  },
  {
    "url": "images/performance/render-css.jpg",
    "revision": "e815fc5a96f8c92d7922bb174fcb0073"
  },
  {
    "url": "images/performance/render-flow.jpg",
    "revision": "a6e71e22fb6057d9f28d82f573662d92"
  },
  {
    "url": "images/performance/render-sketch.jpg",
    "revision": "4b7724b79a3fcb176c9fb49373ffeb2b"
  },
  {
    "url": "images/performance/render-tree.jpg",
    "revision": "be2a44196c967932926dd38a0334ee7e"
  },
  {
    "url": "images/performance/taobao-lighthouse.png",
    "revision": "f397f6ea4679845973658be53d78ed89"
  },
  {
    "url": "images/performance/webpack-cache.jpeg",
    "revision": "67c33e3968bbde3444f4c48f7a8c5a18"
  },
  {
    "url": "images/performance/webpack-test-detail.png",
    "revision": "c0ab70292d6024e80336cc98240bbab9"
  },
  {
    "url": "images/performance/webpage-loading.png",
    "revision": "cc777f6903b9aa920a7f336a2b66f070"
  },
  {
    "url": "images/performance/webpage-test-home.png",
    "revision": "e7d2439a57fc151c7d7579a3a92238cb"
  },
  {
    "url": "images/performance/无痕模式.jpg",
    "revision": "78b6f38648555aa4aabb25b546980d81"
  },
  {
    "url": "images/photo.jpg",
    "revision": "0382d5198f22053303286e15d99aa43e"
  },
  {
    "url": "index.html",
    "revision": "621eff0c8ca709523a5b5920045f3c91"
  },
  {
    "url": "infrastructure/components/01-guide.html",
    "revision": "6b20a6c7b4413a86c67fe6b842827f34"
  },
  {
    "url": "infrastructure/components/02-contributed.html",
    "revision": "ae9b66fe5beb61c29edc8e92c76be4e3"
  },
  {
    "url": "infrastructure/components/button.html",
    "revision": "379931fe333c546e57c8aa289a17f71e"
  },
  {
    "url": "infrastructure/components/index.html",
    "revision": "1dacc5d61f1954f49af0216c7d6f45a8"
  },
  {
    "url": "infrastructure/performance/01-optimize-index.html",
    "revision": "4600fa512e8f128a811fb54d2d699458"
  },
  {
    "url": "infrastructure/performance/02-optimize-tool.html",
    "revision": "b9093db7d74801fb9edcb10f74d99872"
  },
  {
    "url": "infrastructure/performance/03-optimize-image.html",
    "revision": "bdad1c4f26bc96896cad1c0c2bf5c910"
  },
  {
    "url": "infrastructure/performance/04-render-optimize.html",
    "revision": "8b69db8d89af6f39fab208db758b9a50"
  },
  {
    "url": "infrastructure/performance/05-webpack-optimize.html",
    "revision": "5b372cb8e70e2e2a10ef12c4fd5fc77f"
  },
  {
    "url": "infrastructure/performance/06-network-optimize.html",
    "revision": "554882dc7cd1f4f7c7254ecf428a2a34"
  },
  {
    "url": "infrastructure/performance/07-cache-optimize.html",
    "revision": "8fc44148de2aef1f178a258e3af5e23f"
  },
  {
    "url": "infrastructure/performance/08-code-optimize.html",
    "revision": "31ba0767d9d9e53af631fd8763bd6830"
  },
  {
    "url": "infrastructure/performance/09-practive-optimize.html",
    "revision": "32c8ed850fea3ab8cb366e0d659335c4"
  },
  {
    "url": "infrastructure/performance/index.html",
    "revision": "6febb4ffa91b9e8dff943bcc5b70616a"
  },
  {
    "url": "infrastructure/standard/code-review.html",
    "revision": "60bd7ef4f1745c2ea1a54458ff0935d2"
  },
  {
    "url": "infrastructure/visualization/01.technology-selection.html",
    "revision": "e33dc5bca1ad8c038713a12e2924376d"
  },
  {
    "url": "others/index.html",
    "revision": "2bd5e0ae4094d5c839e0f2a84649eda3"
  },
  {
    "url": "template/guide.html",
    "revision": "7f29077713088d8dfc166deeec1dd1d2"
  },
  {
    "url": "tools/develop/doc.html",
    "revision": "7522d914bf1ef8c96db9b6d5a402c8ee"
  },
  {
    "url": "tools/git/advanced.html",
    "revision": "19e3c04e12124039eadff6ad0562f20b"
  },
  {
    "url": "tools/git/basics.html",
    "revision": "5de59a4040274ddf6b53fad1c5635915"
  },
  {
    "url": "tools/git/higher-order.html",
    "revision": "02df107de28f1d6dfa2ecdbb6c3e7e1b"
  },
  {
    "url": "tools/gitlab/webhook.html",
    "revision": "304c6ae6307654f8913f799b882fc4a7"
  },
  {
    "url": "tools/proxy/index.html",
    "revision": "eb7d575d67291c93121ac386f33313fc"
  },
  {
    "url": "tools/vscode/plugin.html",
    "revision": "7d2723d2f640811aed184d4fe12e7582"
  },
  {
    "url": "tools/vscode/shortcut-key.html",
    "revision": "d46c8e5a10d74e44ccbd998ced0a14b1"
  },
  {
    "url": "tools/webpack/index.html",
    "revision": "e9ba9d381feef62de5b0748a0adcbbbb"
  },
  {
    "url": "vue/vue-code-1.package.html",
    "revision": "87b1984d38137f4f18a497ce09305f7e"
  },
  {
    "url": "vue/vue-code-2.rollup.html",
    "revision": "ec22c0dbdaf292cb46f3277e871f9d3e"
  },
  {
    "url": "vue/vue-code-3.build.html",
    "revision": "99b8330790acb11610df818fb12d39b8"
  },
  {
    "url": "vue/vue-code-4.debugger.html",
    "revision": "9f6613c54dd027aa9f3f2120cfa69b62"
  },
  {
    "url": "vue/vue-code-5.mergeOptions.html",
    "revision": "ca9a32b71dee270c66cff1ffd53f64fd"
  },
  {
    "url": "vue/vue-code-6.reactive.html",
    "revision": "9a31e87a983e93ae41c593c0737bccaa"
  },
  {
    "url": "vue/vue-home.html",
    "revision": "52bb8c596bee5175ec02a504767f5c07"
  },
  {
    "url": "vue/vue-practice-01.html",
    "revision": "119a873fdd6eb349b8699b1e6735e540"
  },
  {
    "url": "web/css/1.html",
    "revision": "92a872e2b13c1dc3242e679791c1c319"
  },
  {
    "url": "web/css/2.html",
    "revision": "16dc03c106f3bfa04d1e714357b5bf81"
  },
  {
    "url": "web/css/index.html",
    "revision": "e7dcf8e013e54dc35d55d0106f5627d1"
  },
  {
    "url": "web/function/index.html",
    "revision": "117ed2021b900e4ab0bc19800bc17c1b"
  },
  {
    "url": "web/html/index.html",
    "revision": "a49ea909fea90ee1b6885153b7608139"
  },
  {
    "url": "web/javascript/01-base.html",
    "revision": "3c235ebb6163b01db63d88bfe1ee3d58"
  },
  {
    "url": "web/javascript/02-data-type.html",
    "revision": "987ddcc1aa6fed73ed2c92d097999eba"
  },
  {
    "url": "web/javascript/03-base-type.html",
    "revision": "c179b2c9f5bf007bb05d409a800f81d5"
  },
  {
    "url": "web/javascript/es6.html",
    "revision": "651576a0a3ba1552dd706ecac3f7d405"
  },
  {
    "url": "web/javascript/home.html",
    "revision": "f61fe6a1115891135f0a845e32597e32"
  },
  {
    "url": "web/typescript/01-typescript.html",
    "revision": "995eb06ec318df22b0910cdf7086a079"
  },
  {
    "url": "web/typescript/guide.html",
    "revision": "866c3c1ee2f3877d4d67e0411b683cff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
