#配置
verification_dir = 'C:/Users/SLTru/Desktop/courses/puppeteer/verifications'  #验证码文件路径
veridivation_code_cut_range = {'x':(399,980),'y':(344,681)} #验证码裁剪区域
debug = True #输出调试文件

#程序
import os 
import cv2
import slider
import json
import time

while True:
    for name in os.listdir(verification_dir):
        if -1 is not name.find('cut-'): continue

        verification_file = verification_dir + '/' + name
        cut_file = verification_dir + '/cut-' + name
        result_file = verification_file + '.txt'
        if os.path.exists(result_file) or os.path.exists(result_file): continue
        
        #进入识别
        img = cv2.imread(verification_file)
        if None is img: continue
        
        #裁剪区域
        vccr = veridivation_code_cut_range 
        cropped = img[vccr['y'][0]:vccr['y'][1], vccr['x'][0]:vccr['x'][1]]
        
        #裁剪结果
        cv2.imwrite(cut_file, cropped)
        res = slider.recognise(cut_file)
        if not debug:os.remove(cut_file)
        with open(result_file, 'w') as f:
            f.write(json.dumps(res))
    time.sleep(1)
