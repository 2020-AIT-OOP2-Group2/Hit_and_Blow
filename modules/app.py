import random

class ramdom:
    #一桁目
    number = []
    tmp = random.randint(0,9)
    number.append(tmp)
    #二桁目
    tmp2 = random.randint(0,9)
    while tmp2==tmp:
        tmp2 = random.randint(0,9)
    number.append(tmp2)
    #三桁目
    tmp3 = random.randint(0,9)
    while tmp3==tmp or tmp3==tmp2:
        tmp3 = random.randint(0,9)
    number.append(tmp3)
    #四桁目
    tmp4 = random.randint(0,9)
    while tmp4==tmp or tmp4==tmp2 or tmp4==tmp3:
        tmp4 = random.randint(0,9)
    number.append(tmp4)
    #リストから、数値に変換
    num=''.join(map(str,number))
    




