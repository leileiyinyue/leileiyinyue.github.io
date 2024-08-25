
			//获取视频对象
			var vid = document.getElementById("vd");
            var vplay = document.getElementById("btn")
            vplay.onclick = function(){
            	vid.play()
            }
			//       音频循环播放列表
			var vlist = ["Mp3/笑红尘.mp3", "Mp3/笑看风云.mp3", "Mp3/青臧高原.mp3", "Mp3/今天.mp3", "Mp3/边疆的泉水清又纯.mp3", "Mp3/江南Style.mp3", "Mp3/好运来 .mp3", "Mp3/童年.mp3", "Mp3/鲁冰花-甄妮.mp3", "Mp3/妻子的诱惑 - 无法饶恕.mp3", "Mp3/你怎么说.mp3", "Mp3/山丹丹花开.mp3","Mp3/花好月圆.mp3" ];
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