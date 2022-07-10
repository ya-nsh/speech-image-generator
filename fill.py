"""
1. First read the file
2. Store the string value of the file text in dictionary-1
3. Create dictionary-2 similar to the above one and try to fill in the value with the same key as above.
4. Check the key value pairs of these 2 dictionaries. 
5. If the values are same, repeat the process after 10s.
6. If not, an input from the front end was recorded and the make dictionary-2 the new dictionary-1
7. Repeat the above processes
"""


import time
from selenium import webdriver


def readFile():
    file = open("C:\\Users\\Yansh\\Desktop\\PBL-WORK\\react-deep\\server\\foo.txt", "r")
    txtToFill = file.read()
    return txtToFill


dictionary1 = {"currentText": readFile()}

dictionary2 = dictionary1.copy()

print(
    "value of dict1: ",
    dictionary1["currentText"],
    "value of dict2: ",
    dictionary2["currentText"],
)

while True:
    time.sleep(3)
    dictionary2 = {"currentText": readFile()}
    if dictionary2["currentText"] != dictionary1["currentText"]:
        print(
            "value of dict1: ",
            dictionary1["currentText"],
            "value of dict2: ",
            dictionary2["currentText"],
        )
        print("New input detected")
        break


def runBrowser():
    browser = webdriver.Chrome("./chromedriver.exe")
    browser.get("https://grumpy-trivial-helmetshrike.anvil.app/")
    time.sleep(3)

    included_words = browser.find_element_by_xpath(
        "/html/body/div[2]/div/div/div[1]/div[2]/div[3]/div[1]/div/div[1]/div/div/div/div/div/div/div/div/div/div/div[2]/div/input"
    )

    included_words.send_keys(dictionary2["currentText"])

    time.sleep(2)
    submitBtn = browser.find_element_by_xpath(
        "/html/body/div[2]/div/div/div[1]/div[2]/div[3]/div[1]/div/div[2]/div/div/div/div/div/div/button"
    )
    submitBtn.click()
    time.sleep(120)


while True:
    print("Current dict2 value ->", dictionary2["currentText"])
    runBrowser()
    # time.sleep(10)
    # dictionary1["currentText"] = readFile()


# runBrowser()

# dictionary1["currentText"] = dictionary2["currentText"]
