'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e3a70e34304485de1c79c91e62bd2dbc",
"assets/FontManifest.json": "74a3cf565c463b0908484103a9ce5bf4",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/aerodynamics.jpeg": "609ac123e1e81769a39e19797e31ff6a",
"assets/images/electronics.jpeg": "dca0934a928ec8ec5f5d1195eff2c07a",
"assets/images/frame.jpeg": "e929ba85fdd72e9802e5d43e4fa19361",
"assets/images/intake_exhaust.jpeg": "488911ada9fed5258f3b641d0150bedf",
"assets/images/loading.mp4": "cf6f5eda8731b92f171a3155350b1b0d",
"assets/images/public_relations.jpeg": "16426ff4ef3f59aa44119cbc4c4cd5f9",
"assets/images/social_media_manager.jpeg": "c24feac8ee1ee0fef020aab753b7e706",
"assets/images/suspension.jpeg": "bdf357d708368e4086ced09258a1dab1",
"assets/NOTICES": "a4acdc29f2a2896b8a0c0f216f395954",
"assets/packages/country_flags/res/ac.svg": "8ab65b7168da5d0907ece0c811ba27d8",
"assets/packages/country_flags/res/ad.svg": "8c821c9a108a35aa6bb0935e6cb2d131",
"assets/packages/country_flags/res/ae.svg": "42d71570eaa84e61032f934cc8296e79",
"assets/packages/country_flags/res/af.svg": "80deffc567027c82fc0dd8136826da5d",
"assets/packages/country_flags/res/ag.svg": "17a806150811b062d3f38ccc363a583f",
"assets/packages/country_flags/res/ai.svg": "61c09b79f9b83dca2e696b364721df05",
"assets/packages/country_flags/res/al.svg": "eab38620e9f9fa06a9325f9551352f94",
"assets/packages/country_flags/res/am.svg": "39c5d05ed3ce2660746bf8ea995af707",
"assets/packages/country_flags/res/ao.svg": "52753def72744f8ce26c003e58ac89ae",
"assets/packages/country_flags/res/aq.svg": "d96624823ceaf3950ba1b197e1f0b99c",
"assets/packages/country_flags/res/ar.svg": "94880136a667d43c299b831e9045c6fe",
"assets/packages/country_flags/res/as.svg": "bbe697d2ff84b5329096b2ecfaffc03e",
"assets/packages/country_flags/res/at.svg": "8dc68995ec419a9440a25fadc2d8193d",
"assets/packages/country_flags/res/au.svg": "0af6624d4b0ca5e2348e094d3fe0a4bb",
"assets/packages/country_flags/res/aw.svg": "f3df34c6de69f5f7b74b9b0d1fbdfc66",
"assets/packages/country_flags/res/ax.svg": "eebce886890fef7a727b1caffdf13d01",
"assets/packages/country_flags/res/az.svg": "403e9b3f84602663476f4139b92916ea",
"assets/packages/country_flags/res/ba.svg": "d1e412e924a8140b88bff6e3987be045",
"assets/packages/country_flags/res/bb.svg": "89161f1489c1c83b696a8cd72af75f36",
"assets/packages/country_flags/res/bd.svg": "e99cb11fdae12d94bce83d228b052dc3",
"assets/packages/country_flags/res/be.svg": "6cac03795313d7c043bbdd4d27c08494",
"assets/packages/country_flags/res/bf.svg": "4755cc0eeffc214e72703111d483703f",
"assets/packages/country_flags/res/bg.svg": "5a32d80ff45984bc53108bc3138df0e7",
"assets/packages/country_flags/res/bh.svg": "86725006a063c2db6d6b0ae08d2a2ae5",
"assets/packages/country_flags/res/bi.svg": "7e980569f3f75f08045ad3f87094a1c6",
"assets/packages/country_flags/res/bj.svg": "835db4368d01c102146ea2e23b0ee45e",
"assets/packages/country_flags/res/bl.svg": "ebfec5274df662393baa89b384d53c4f",
"assets/packages/country_flags/res/bm.svg": "21debc2e785ee90e5cb17e4d1e51c2ef",
"assets/packages/country_flags/res/bn.svg": "d5a2d91852038fab108963ea00f36712",
"assets/packages/country_flags/res/bo.svg": "b1232fed4a8a6f174e8e7fd6b168c4ec",
"assets/packages/country_flags/res/bq.svg": "63fa6eef889e055a5af0496cf8c8adfe",
"assets/packages/country_flags/res/br.svg": "155348d0d5ca941fc05473797fa203b8",
"assets/packages/country_flags/res/bs.svg": "3d1823e1342d7ef6bd01cc5eed9ceefa",
"assets/packages/country_flags/res/bt.svg": "d35b5dd296478dbb051851d853a280f0",
"assets/packages/country_flags/res/bv.svg": "63455590e52a86229a2bfb6111567006",
"assets/packages/country_flags/res/bw.svg": "8b493920bf8c0e60ff203403e668c73f",
"assets/packages/country_flags/res/by.svg": "417d52d05c31f5ee2cdd9ad4a0dac3f4",
"assets/packages/country_flags/res/bz.svg": "10078a026b33398e760e021504be9b31",
"assets/packages/country_flags/res/ca.svg": "f3277db42e8a0498c5f23b58c4d681fe",
"assets/packages/country_flags/res/cc.svg": "78a55c27fdfb24bb8e8844add13d0db4",
"assets/packages/country_flags/res/cd.svg": "4346647bc68ddba26c8a09980a380d8a",
"assets/packages/country_flags/res/cefta.svg": "54b2dd1262076b3b784d43e543fa9e82",
"assets/packages/country_flags/res/cf.svg": "f5e33c7fc3c3b9af45630f25146a7ae8",
"assets/packages/country_flags/res/cg.svg": "994a4cc795f60e6f07b55cd314557585",
"assets/packages/country_flags/res/ch.svg": "269ddab4d19b9c60a6459c09ddfd48c9",
"assets/packages/country_flags/res/ci.svg": "71b3f6b842edddfcbd0c964f6c45d7f1",
"assets/packages/country_flags/res/ck.svg": "ae3ea163a41e7acc6ec68d293ee62911",
"assets/packages/country_flags/res/cl.svg": "b51cf61c9b17b8810a5c65473a95d148",
"assets/packages/country_flags/res/cm.svg": "b2723805bb88df273f2a96d5f863ae31",
"assets/packages/country_flags/res/cn.svg": "01b1e16506941b544ede62b2d65fdbad",
"assets/packages/country_flags/res/co.svg": "eefa6c2cd269ce7da90dc5ac0d78a48a",
"assets/packages/country_flags/res/cp.svg": "5f03d4b2930f96cda5d13452fab7589f",
"assets/packages/country_flags/res/cr.svg": "8f9e3dcc8f47407f57dd2eca6721d415",
"assets/packages/country_flags/res/cu.svg": "28fdecd7bb83ad763ce1e9cd1b86c085",
"assets/packages/country_flags/res/cv.svg": "ac9da5f869f05b7576df60224e8c50ff",
"assets/packages/country_flags/res/cw.svg": "1775b44490e2c80bd7165885f1f78c4f",
"assets/packages/country_flags/res/cx.svg": "bbaba316c3e9a6b27ed5d6cbd9f0512c",
"assets/packages/country_flags/res/cy.svg": "b3ef7d784e6260167591594e5c61350f",
"assets/packages/country_flags/res/cz.svg": "859f18a5acfd4e8d702a9b3d539dfd2d",
"assets/packages/country_flags/res/de.svg": "78feb91bfda2ddce6bcfdcbab050995b",
"assets/packages/country_flags/res/dg.svg": "df9cbaffd7777eaaefec825e520ad75a",
"assets/packages/country_flags/res/dj.svg": "4d65966c9685be8f751f08e25707067d",
"assets/packages/country_flags/res/dk.svg": "33bba71c12896b2df18901d98cf2b62c",
"assets/packages/country_flags/res/dm.svg": "3de3461422d9c4e03e74c052e60207a3",
"assets/packages/country_flags/res/do.svg": "19306ca7781bd328d8e373b321a81421",
"assets/packages/country_flags/res/dz.svg": "b37c4fcf5782f19c46c24f834a141bb1",
"assets/packages/country_flags/res/ea.svg": "a4525b4f78f41ec588eaa17fea35de4d",
"assets/packages/country_flags/res/ec.svg": "d8b5c15adb4f81491e29980a0540b833",
"assets/packages/country_flags/res/ee.svg": "aafa1c5af55d29680fe5e4fbd837e32d",
"assets/packages/country_flags/res/eg.svg": "34cb0b1f6dcb54334a4b2581cc7b742a",
"assets/packages/country_flags/res/eh.svg": "04684006247417cc69ec88383bd95732",
"assets/packages/country_flags/res/er.svg": "075f7d29333fde30b467add6d99b87dc",
"assets/packages/country_flags/res/es-ct.svg": "3eb3a35a978070fd4a68db545c527b54",
"assets/packages/country_flags/res/es-ga.svg": "186685299735a4fd2ac07d20479336a6",
"assets/packages/country_flags/res/es.svg": "91221aeba452aeb57c55826c70920835",
"assets/packages/country_flags/res/et.svg": "183f3604f5512ca69d1705502961afcd",
"assets/packages/country_flags/res/eu.svg": "510ca6da0d406bf2e66dce7733deff41",
"assets/packages/country_flags/res/fi.svg": "0e5ef3f583daa1a415330bed83ce8c4a",
"assets/packages/country_flags/res/fj.svg": "16e1816076d0cd120e7d35ba7538f445",
"assets/packages/country_flags/res/fk.svg": "c25c0cfa4535b85eb73e3732972fc8ad",
"assets/packages/country_flags/res/fm.svg": "5748d380a2042c3500591e8c66f97b68",
"assets/packages/country_flags/res/fo.svg": "561d8e5c419b22b68d35c8513e5dfb66",
"assets/packages/country_flags/res/fr.svg": "cc4d943dbac895a562d174fc60d3a8df",
"assets/packages/country_flags/res/ga.svg": "f64e29ed68d2165d3620d53978933bb6",
"assets/packages/country_flags/res/gb-eng.svg": "7caecb785400d1cca7b319887a9d81bf",
"assets/packages/country_flags/res/gb-nir.svg": "4bcdeacbaadb89951a2cf091276e6bd9",
"assets/packages/country_flags/res/gb-sct.svg": "ade55ed456211d6577b2f80c06e40c51",
"assets/packages/country_flags/res/gb-wls.svg": "9490411928d3db5cad64a17d7c2c9f8b",
"assets/packages/country_flags/res/gb.svg": "fcfef6780b36bef537381474df9d0be9",
"assets/packages/country_flags/res/gd.svg": "f87d3f8093bed33870c6f2734ed69866",
"assets/packages/country_flags/res/ge.svg": "a397fa63e3a6dc02a99a7093aa43d3a9",
"assets/packages/country_flags/res/gf.svg": "a73b51b1d7542ddd825111a3a991154c",
"assets/packages/country_flags/res/gg.svg": "453d95c72cd4fdccd241b61a839603ff",
"assets/packages/country_flags/res/gh.svg": "b1a97938c1f961df78998f50cc3d542e",
"assets/packages/country_flags/res/gi.svg": "944d9dbac1f49db41d054c780b1d8dbd",
"assets/packages/country_flags/res/gl.svg": "c6090a99ab0402116f4ab70719eb034a",
"assets/packages/country_flags/res/gm.svg": "44e4c41658e277baffaea136ffeebc28",
"assets/packages/country_flags/res/gn.svg": "f1d6c153def70087cff4f84c49ee2fb2",
"assets/packages/country_flags/res/gp.svg": "bd91dc734aa92a491b8b8e0f1cd2127d",
"assets/packages/country_flags/res/gq.svg": "52b4ac099f46be415847f63cde06289c",
"assets/packages/country_flags/res/gr.svg": "71452bbd08d693543125cc15f5943637",
"assets/packages/country_flags/res/gs.svg": "e217176641908e21302f9430ec9c15f7",
"assets/packages/country_flags/res/gt.svg": "9e6c4331a81db6f16830e022daa9cd1a",
"assets/packages/country_flags/res/gu.svg": "3a19af9300cc67ff4a5dc7fe93b1d4e3",
"assets/packages/country_flags/res/gw.svg": "6241752e14e4af2b1f8c1ea22688e668",
"assets/packages/country_flags/res/gy.svg": "6a64d2f47b268200557555ac4ffcd8dd",
"assets/packages/country_flags/res/hk.svg": "c1b9d3ff90e0b148a8d61ab9ef5f682c",
"assets/packages/country_flags/res/hm.svg": "e49ba24a0e759a8d849c4c709adf7fb8",
"assets/packages/country_flags/res/hn.svg": "e4953d7b732a30f97a13706fc34a9680",
"assets/packages/country_flags/res/hr.svg": "9b7fd1f4bbdbe44a159903d73ac3a7e1",
"assets/packages/country_flags/res/ht.svg": "a72d61488aed0aa3587ccef014787597",
"assets/packages/country_flags/res/hu.svg": "966f49336f7466efd6f8dbe19f9fc300",
"assets/packages/country_flags/res/ic.svg": "bdc9877c5d42dfa5adcfb488fcbf153c",
"assets/packages/country_flags/res/id.svg": "f5aa812145ee85fa05e5f2b62bdf030e",
"assets/packages/country_flags/res/ie.svg": "1c12635a2932de4b8036779933a84d97",
"assets/packages/country_flags/res/il.svg": "b3e45cd77dbad1845e29574b8f882f8b",
"assets/packages/country_flags/res/im.svg": "52522de43471ee9bbfcfe83c9ef9ab10",
"assets/packages/country_flags/res/in.svg": "fd8e911182680a39719929a06ae8658b",
"assets/packages/country_flags/res/io.svg": "2a056db8500f1b4857c8933a56f386f7",
"assets/packages/country_flags/res/iq.svg": "77828901b08c8bde8d09bc969f6fe2bd",
"assets/packages/country_flags/res/ir.svg": "9bb2c335fa3c0949207d62c6cb03bdd6",
"assets/packages/country_flags/res/is.svg": "262b99a33993cbe344260071c64f115f",
"assets/packages/country_flags/res/it.svg": "1d72a5dec3acd073763570e3e5fdf784",
"assets/packages/country_flags/res/je.svg": "ca5c626acc1943fea1f1c0ec59dcb57f",
"assets/packages/country_flags/res/jm.svg": "7c6602774a31cdc41f9ceae4ab057c3f",
"assets/packages/country_flags/res/jo.svg": "7b0141136c77225f631b82cbe811a586",
"assets/packages/country_flags/res/jp.svg": "1dbf51e247c6c40000c51a1070515fe9",
"assets/packages/country_flags/res/ke.svg": "3db68a6675308826f2355392d7a2db65",
"assets/packages/country_flags/res/kg.svg": "f4257dfe8a3a9221607ddaaf87aadc60",
"assets/packages/country_flags/res/kh.svg": "a17374375f50fae95a315cdc23913f0c",
"assets/packages/country_flags/res/ki.svg": "2fa0e53df493fee3884410571f6e4542",
"assets/packages/country_flags/res/km.svg": "38d64550462fce58e2b2ddb634feda64",
"assets/packages/country_flags/res/kn.svg": "f8310b405994251fd597525ff236a377",
"assets/packages/country_flags/res/kp.svg": "3f06f4b2d6cbe62a40fbac43f7a5e179",
"assets/packages/country_flags/res/kr.svg": "c897da1135247a544e4a901c6acd97ce",
"assets/packages/country_flags/res/kw.svg": "ae1006cd390348198b00d6df6a0a7ca5",
"assets/packages/country_flags/res/ky.svg": "44077b2ea9698b391433d028ac32ad6f",
"assets/packages/country_flags/res/kz.svg": "263fd9387aa84ebfb4f501c30df2c7f7",
"assets/packages/country_flags/res/la.svg": "000f7e9866f269b2ad4f67daf6b45310",
"assets/packages/country_flags/res/lb.svg": "fdf7e7729c66c92380744ba72d8a481f",
"assets/packages/country_flags/res/lc.svg": "940e9ba93eec286b5abee7657cf03283",
"assets/packages/country_flags/res/li.svg": "0f6fda67daaceda3756227d9169233c0",
"assets/packages/country_flags/res/lk.svg": "781747a12573aa5c4b6c3d7f8ddea7ce",
"assets/packages/country_flags/res/lr.svg": "673bc938fed43b26a9b8e9af8b3295eb",
"assets/packages/country_flags/res/ls.svg": "4da8ca4f6e1c0d5486f4d6e30256c6d6",
"assets/packages/country_flags/res/lt.svg": "7e7110b65bbe5cbfb8a84a0e5f68284e",
"assets/packages/country_flags/res/lu.svg": "7f70b02c8514c31fc4de448b419ae0d6",
"assets/packages/country_flags/res/lv.svg": "0b4e6e1a21a939a1a474341da5aee4ca",
"assets/packages/country_flags/res/ly.svg": "d88ce1726ac6f1c4e02f6617ba5ebff0",
"assets/packages/country_flags/res/ma.svg": "a2e6a76e5f38058fd28b706beeb6a1b7",
"assets/packages/country_flags/res/mc.svg": "acbf04f75fb877d1c2aef0f553c8d629",
"assets/packages/country_flags/res/md.svg": "d4e707da066346718010da32dcbf1802",
"assets/packages/country_flags/res/me.svg": "144e25db369a068c521780d81ee22bcb",
"assets/packages/country_flags/res/mf.svg": "1abc9ffce4fc338ebc295c44886a0c10",
"assets/packages/country_flags/res/mg.svg": "7a54f12dc753217b1c0aaa7bf685f9fe",
"assets/packages/country_flags/res/mh.svg": "63433c4cd0e5030836734de14bc1e52a",
"assets/packages/country_flags/res/mk.svg": "b96b8a63c2939ef1e4cebb9585908591",
"assets/packages/country_flags/res/ml.svg": "1dd7a9ccbcd179a5a3fba550970ad75c",
"assets/packages/country_flags/res/mm.svg": "6d702a74ce6149ddb4a4fe643f12d1fa",
"assets/packages/country_flags/res/mn.svg": "1ef812fb28554e7d9b4c2da6b96e89c9",
"assets/packages/country_flags/res/mo.svg": "e26a4c9d3e2d83eaf88f89a730cc1538",
"assets/packages/country_flags/res/mp.svg": "fcca6f222c12fe74ee924f54df5a47f5",
"assets/packages/country_flags/res/mq.svg": "75f2db2f4c6bbc0d72af6b43dfc255f3",
"assets/packages/country_flags/res/mr.svg": "4610ac53854ba558c74d5c8eccc21e2a",
"assets/packages/country_flags/res/ms.svg": "be07a14636ff98949ae89501ec3d5c03",
"assets/packages/country_flags/res/mt.svg": "f5c28c0a6c18fc4085c08a50ecfb6d6b",
"assets/packages/country_flags/res/mu.svg": "46514c8008dc3564e49eaa790f28e255",
"assets/packages/country_flags/res/mv.svg": "44a3b21f0ab17367c095a8798f7cc4da",
"assets/packages/country_flags/res/mw.svg": "dc4b154514985cbac37c6023d598243f",
"assets/packages/country_flags/res/mx.svg": "d326007cf87dba95a56cb4a25b408558",
"assets/packages/country_flags/res/my.svg": "8358896e0b6f2aa8f4e793183cfe4e43",
"assets/packages/country_flags/res/mz.svg": "ee2126c614050864c6fe6ae191bece1f",
"assets/packages/country_flags/res/na.svg": "0d45af211e54a89954a129c9f5a6a8f9",
"assets/packages/country_flags/res/nc.svg": "c292b9576b6951a3b81714d01975dba9",
"assets/packages/country_flags/res/ne.svg": "5c109026a107f910512b09e208a90538",
"assets/packages/country_flags/res/nf.svg": "cc20348d89f9f1702b1a6760f33697e2",
"assets/packages/country_flags/res/ng.svg": "9eea84efdc0eb2553b9d3502feac044d",
"assets/packages/country_flags/res/ni.svg": "5d25063c36586808c99e08b94217b794",
"assets/packages/country_flags/res/nl.svg": "f685765a298db5ba59fddfa6de08020e",
"assets/packages/country_flags/res/no.svg": "859a13561a1b24bfa65fb1a03835da49",
"assets/packages/country_flags/res/np.svg": "5e78f7a76448b585ae10a9a96249273f",
"assets/packages/country_flags/res/nr.svg": "54af7342598cb40e2032a86ddf77a12e",
"assets/packages/country_flags/res/nu.svg": "bfd6de48e40574ec6d86c6e0589baa48",
"assets/packages/country_flags/res/nz.svg": "55c65e06d0b73b57f438e2af94f730ff",
"assets/packages/country_flags/res/om.svg": "d8fbf0d229e2fa0745371e95cf773018",
"assets/packages/country_flags/res/pa.svg": "2827f6a5eb2953ae35ad7f8722312bda",
"assets/packages/country_flags/res/pe.svg": "b2d666043efa5be725a6acf9654fb4d1",
"assets/packages/country_flags/res/pf.svg": "b9d2538cd84201df2b28689eba25fa5f",
"assets/packages/country_flags/res/pg.svg": "350974494867e834ec0fae91d98e9efd",
"assets/packages/country_flags/res/ph.svg": "64c3d8b03bf21d10661c2384ebf3247f",
"assets/packages/country_flags/res/pk.svg": "8bb4156614d25e06c8e3b1ed3a131d6c",
"assets/packages/country_flags/res/pl.svg": "f7adaa942c63ca98f1d2362bc67c45e3",
"assets/packages/country_flags/res/pm.svg": "6853a3c31a803114fb9f3ec1630fdca9",
"assets/packages/country_flags/res/pn.svg": "7d49d6f9d00d6e435c6d34084f21491f",
"assets/packages/country_flags/res/pr.svg": "16828b387933e4a8b774c6b02d79735d",
"assets/packages/country_flags/res/ps.svg": "66f425e1a07a1ee2209d809e4851a2f3",
"assets/packages/country_flags/res/pt.svg": "a36b3d87508ad8f6a6bc6787bbe808ed",
"assets/packages/country_flags/res/pw.svg": "232251df33a333c11db5c25dd84278e4",
"assets/packages/country_flags/res/py.svg": "d3e57b21c6b9cbe61a792e6592e1811b",
"assets/packages/country_flags/res/qa.svg": "9dfdc1ae61fc572c4d2f7b329a3eeeb5",
"assets/packages/country_flags/res/re.svg": "ba6ff1f775630d60fb2f9d3b1f9d75bd",
"assets/packages/country_flags/res/ro.svg": "e9130a28a9ba2b93433f21a2cd5971f3",
"assets/packages/country_flags/res/rs.svg": "6962d76caa3247185a5ef7bb990530bb",
"assets/packages/country_flags/res/ru.svg": "ab61f31edf4ad95b5ae00aff3be99197",
"assets/packages/country_flags/res/rw.svg": "e28b5d139e8f8ef57a246718fad4f773",
"assets/packages/country_flags/res/sa.svg": "8950e015955c87e6d7c8944abc9215e0",
"assets/packages/country_flags/res/sb.svg": "138cc3491ef68d30006862c87b784544",
"assets/packages/country_flags/res/sc.svg": "ab4767bc4088728a6841e7e578f6c7a8",
"assets/packages/country_flags/res/sd.svg": "54aa0c7f8087e624ca5e820010d92063",
"assets/packages/country_flags/res/se.svg": "e9e24cfb2d85c7e39aafe267fffb0810",
"assets/packages/country_flags/res/sg.svg": "966947b511d06da100d23e5b29e5ec75",
"assets/packages/country_flags/res/sh.svg": "42100063de4741612cb71e9eb2c246a8",
"assets/packages/country_flags/res/si.svg": "d415adba66ed26827f5851cc554cbc5d",
"assets/packages/country_flags/res/sj.svg": "5b6dddaf6a82ad8090d313f3088b7e2d",
"assets/packages/country_flags/res/sk.svg": "6363e990e97551bbabf9316bf0200d30",
"assets/packages/country_flags/res/sl.svg": "af0884d411f36ff8e0fb199a00b70691",
"assets/packages/country_flags/res/sm.svg": "1553b4ae7cafa07d21a6c993224568ab",
"assets/packages/country_flags/res/sn.svg": "091e42c6f8d95a1740ff343dcec62c7a",
"assets/packages/country_flags/res/so.svg": "49c23c23f0c1010edb565601afdd66e2",
"assets/packages/country_flags/res/sr.svg": "07e91c157e4b9e240d9b004da3529f08",
"assets/packages/country_flags/res/ss.svg": "9a15dd43db84232e2a99b343c73dc2f0",
"assets/packages/country_flags/res/st.svg": "12444111a834c4924ca5a5d6c8bbb10a",
"assets/packages/country_flags/res/sv.svg": "2e44b8d35c6d3192f072f15ae1215e29",
"assets/packages/country_flags/res/sx.svg": "1ca5cba81f81e2e5763c1e39a822983d",
"assets/packages/country_flags/res/sy.svg": "b288d06027dd0a86539faa3b1635cc73",
"assets/packages/country_flags/res/sz.svg": "9a86ca49275c8a3d5a8868785018a2c7",
"assets/packages/country_flags/res/ta.svg": "cd7f394fecf83213ed4c64d8a28e3af5",
"assets/packages/country_flags/res/tc.svg": "6b1692870e964f58a34db590dcb07723",
"assets/packages/country_flags/res/td.svg": "e092133da9e0fba424dba80e4de91d3f",
"assets/packages/country_flags/res/tf.svg": "b444aed98557f781c72b655c278633d6",
"assets/packages/country_flags/res/tg.svg": "95cfc626f2ee3b15e9ea8848ebe85bc9",
"assets/packages/country_flags/res/th.svg": "bcc03a3cd1a367274a2444aff71c0a68",
"assets/packages/country_flags/res/tj.svg": "71c18cc6c6e3f4a4df3bcd3e1fd4c8a1",
"assets/packages/country_flags/res/tk.svg": "5a5f29010b5758c306125f3cd2d061b0",
"assets/packages/country_flags/res/tl.svg": "9482e6980f321a6b0384da7d3a9cc9d0",
"assets/packages/country_flags/res/tm.svg": "a1c18f1aeedd55fb7818bd2d7fa4ce83",
"assets/packages/country_flags/res/tn.svg": "d5713a625844c73e5fa9b1963bc39c5d",
"assets/packages/country_flags/res/to.svg": "cccdba4c3dfd080aeda7302c23588c7a",
"assets/packages/country_flags/res/tr.svg": "4dd4b60c8a5e3dad5e65fdfa9745c03f",
"assets/packages/country_flags/res/tt.svg": "db362840eedbb651bff0b539e387bfb6",
"assets/packages/country_flags/res/tv.svg": "c75afdde63ae0e1e205c5dfd653afffe",
"assets/packages/country_flags/res/tw.svg": "ecdb8344f97cbe2640def79cb5715b7a",
"assets/packages/country_flags/res/tz.svg": "7feb5df03a4bfdf45a2d07142e96360f",
"assets/packages/country_flags/res/ua.svg": "6d944bf795f95c09b2f78819af42db89",
"assets/packages/country_flags/res/ug.svg": "d4979cba12c8cc75c405f6e60cec3ff1",
"assets/packages/country_flags/res/um.svg": "13700d16d565470751f43b7d2983bc20",
"assets/packages/country_flags/res/un.svg": "5232b1ea60a370c46c7e3cae2d8bd00e",
"assets/packages/country_flags/res/us.svg": "bfaaeb1ca82bf9541f20aa098f3e7cf2",
"assets/packages/country_flags/res/uy.svg": "a4931745a01469ef5a3ef89343a211ee",
"assets/packages/country_flags/res/uz.svg": "7c1bc5a1f5aee60e57380f3db156a060",
"assets/packages/country_flags/res/va.svg": "e06e2790c52620f7ef00239f3dbc2e70",
"assets/packages/country_flags/res/vc.svg": "0d135a5aaa2be532208f06d7ba9f7b08",
"assets/packages/country_flags/res/ve.svg": "d358f3427b172795014e958354ad7dc4",
"assets/packages/country_flags/res/vg.svg": "b1c5905335f081d7e537a1b8db1088aa",
"assets/packages/country_flags/res/vi.svg": "8a74e2f6f1a5072c3cc722abcf18fb04",
"assets/packages/country_flags/res/vn.svg": "84ca2cbe4f50ce88b9ef245de1b85361",
"assets/packages/country_flags/res/vu.svg": "b002238b3ee68b349c5d0dc7e4bc11de",
"assets/packages/country_flags/res/wf.svg": "a21e1165817be7033a12cdb58cf5fc53",
"assets/packages/country_flags/res/ws.svg": "096fc50015e936e5ef310183baab82ca",
"assets/packages/country_flags/res/xk.svg": "6f10dceb91bda301d4d8a33a4542ff83",
"assets/packages/country_flags/res/xx.svg": "4f0521d49f071018959ad7869a72cf22",
"assets/packages/country_flags/res/ye.svg": "d4cc9017b9793281c667ca3d305534ed",
"assets/packages/country_flags/res/yt.svg": "acd69b989c8e50c14c921a794169c5de",
"assets/packages/country_flags/res/za.svg": "0f05edd20e9989a57e9c3a57ab51673c",
"assets/packages/country_flags/res/zm.svg": "c7ae1fe5074c360603a7b9bbfcdbc33d",
"assets/packages/country_flags/res/zw.svg": "fdf31fa40dfd6be8a178fd03639e72e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "ac6e296b31cb5e2ad1e42a78cf80ee70",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "11988a5d720c7e49d3cadd84dc22d9f1",
"/": "11988a5d720c7e49d3cadd84dc22d9f1",
"main.dart.js": "c73cd866f8395daf0c8d318371a47e2e",
"manifest.json": "c97e7250f690e4a0e91f24b3199ae43d",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "b321edf5fead3ac924047fd4790a798e",
"version.json": "8a506301a576a63742a2382f7dbe096c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
