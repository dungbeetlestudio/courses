#配置
verification_dir = 'C:/Users/SLTru/Desktop/courses/puppeteer/verifications'  #验证码文件路径
debug = True #输出调试文件

#程序
import os 
import cv2
import slider
import json
import time

while True:
    for name in os.listdir(verification_dir):
        if -1 is not name.find('.txt'): continue

        verification_file = verification_dir + '/' + name
        result_file = verification_file + '.txt'
        if os.path.exists(result_file): continue
        
        res = slider.recognise(verification_file)
        with open(result_file, 'w') as f:
            f.write(json.dumps(res))
    time.sleep(1)
