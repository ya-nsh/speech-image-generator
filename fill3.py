import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options


options = Options()
queryInputs = []
options.headless = True


def readFile():
    file = open("C:\\Users\\Yansh\\Desktop\\PBL-WORK\\react-deep\\server\\foo.txt", "r")
    txtToFill = file.read()
    return txtToFill


dictionary1 = {"currentText": readFile()}
dictionary2 = dictionary1.copy()


def clearFile():
    file = open("C:\\Users\\Yansh\\Desktop\\PBL-WORK\\react-deep\\server\\foo.txt", "w")
    file.write("")
    print("File cleared")

    # setting both dictionaries to the same value
    dictionary1["currentText"] = ""
    dictionary2["currentText"] = ""
    # dictionary2["currentText"] = dictionary1["currentText"]
    print("Dictionaries set to the same value")
    print(
        "value of dict1: ",
        dictionary1["currentText"],
        "value of dict2: ",
        dictionary2["currentText"],
    )

    file.close()


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
        print("\n\n\nNew input detected\n")

        break


def runBrowser():
    browser = webdriver.Chrome("./chromedriver.exe")
    # browser = webdriver.Chrome("./chromedriver.exe", options=options)
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
    # time.sleep(120)
    time.sleep(2)

    clearFile()
    return True


while True:
    print("Current dict2 value ->", dictionary2["currentText"])

    if dictionary2["currentText"] != "":
        runBrowser()

    else:
        time.sleep(5)
        print("Waiting for new input")

        dictionary1 = {"currentText": readFile()}
        print("\n\n\n\n\ndictionary1: " + dictionary1["currentText"])
        if (
            dictionary2["currentText"] != dictionary1["currentText"]
            and dictionary1["currentText"] != ""
        ):
            dictionary2["currentText"] = dictionary1["currentText"]

            runBrowser()
