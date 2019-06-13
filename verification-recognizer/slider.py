#配置
features_slider_dir = 'features-slider-major'

#程序
import os
import cv2
import numpy as np

def check(verification_file,feature_file):
    img = cv2.imread(verification_file,0)
    template = cv2.imread(feature_file,0)
    w,h = template.shape[::-1]
    method = cv2.TM_CCOEFF_NORMED
    res = cv2.matchTemplate(img,template,method)
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)
    top_left = max_loc
    img_size = img.shape[::-1]
    if top_left[0] < (img_size[0] / 2):
        return (0,0,0)
    return (top_left[0] + w / 2,top_left[1] + w / 2, max_val) # 返回中心点

def recognise(verification_file):
    point = {'x':0,'y':0}
    max_rs = 0
    for name in os.listdir(features_slider_dir):
        feature_file = features_slider_dir + '/' + name
        (x,y,rs) = check(verification_file,feature_file)
        if rs > max_rs and x > (288 / 2):
            max_rs = rs
            point = { 'x':x, 'y':y }
    return point