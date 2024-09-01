
			//获取视频对象
			var vid = document.getElementById("vd");
            var vplay = document.getElementById("btn")
            vplay.onclick = function(){
            	vid.play()
            }
			//       音频循环播放列表
			var vlist = ["Arpent.mp3", "Sciencenet Theme.mp3", "Gotta Keep On Movin.mp3", "Murder On The Bayou.mp3", "Sun Up Gunned Down.mp3", "Ambush in Rattlesnake Gulch.mp3", "Goodnightmare.mp3", "Arpent.mp3" ];
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
