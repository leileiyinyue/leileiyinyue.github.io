
			//获取视频对象
			var vid = document.getElementById("vd");
            var vplay = document.getElementById("btn")
            vplay.onclick = function(){
            	vid.play()
            }
			//       音频循环播放列表
			var vlist = ["Mp3/Mood.mp3", "Mp3/she.mp3", "Mp3/白月光与朱砂痣.mp3", "Mp3/潮汐.mp3", "Mp3/到了这个年纪.mp3", "Mp3/飞鸟和蝉.mp3", "Mp3/海底.mp3", "Mp3/酒醉的蝴蝶.mp3", "Mp3/可可托海的牧羊人.mp3", "Mp3/来迟.mp3", "Mp3/浪子闲话.mp3", "Mp3/热爱105°C的你.mp3","Mp3/少年.mp3","Mp3/世界这么大还是遇见你.mp3","Mp3/听我说谢谢你.mp3","Mp3/微微.mp3","Mp3/笑柄.mp3","Mp3/燕无歇.mp3","Mp3/要你管.mp3","Mp3/夜夜夜漫长.mp3", ];
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