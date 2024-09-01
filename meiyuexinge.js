
			//获取视频对象
			var vid = document.getElementById("vd");
            var vplay = document.getElementById("btn")
            vplay.onclick = function(){
            	vid.play()
            }
			//       音频循环播放列表
			var vlist = ["Mp3/半生雪.mp3", "Mp3/辞九门回忆.mp3", "Mp3/等你等到我心痛.mp3", "Mp3/点歌的人.mp3", "Mp3/独一无二.mp3", "Mp3/饿狼传说.mp3", "Mp3/鬼迷心窍.mp3", "Mp3/狂狼.mp3", "Mp3/旧梦一场.mp3", "Mp3/夜之光.mp3", "Mp3/一路上有你.mp3", "Mp3/一千个伤心的理由.mp3","Mp3/相思风雨中.mp3","Mp3/吻别.mp3","Mp3/下山.mp3","Mp3/想和你去吹吹风.mp3","Mp3/一曲相思.mp3" ];
				var k = 0;
			
			//点击切换到下一个资源
			document.getElementById("btn2").onclick = function() {
				k++;
				if(k == vlist.length) {
					k = 0;
				}
				vid.src = vlist[k];
				vid.play();

			}

			//点击切换到上一个资源
			document.getElementById("btn1").onclick = function() {
				k--;
				if(k < 0) {
					k = vlist.length - 1;
				}
				vid.src = vlist[k];
				vid.play();

			}
			var k = 0; //初始播放视频索引
			vid.onended = function() {
				k++;
				if(k == vlist.length) {
					k = 0;
				}
				vid.src = vlist[k];
				vid.play();
			}