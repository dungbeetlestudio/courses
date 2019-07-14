import uiautomator2 as u2
import cv2

d = u2.connect() # connect to device
print(d.info)

d.app_start("com.tencent.tim") # start with package name
image = d.screenshot(format='opencv')
cv2.imwrite('home.jpg', image[0:200,0:100])

d(resourceId="com.tencent.tim:id/name", text="搜索").click()
d(resourceId="com.tencent.tim:id/et_search_keyword").send_keys('517013400')