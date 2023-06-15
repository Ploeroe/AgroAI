import time
from selenium import webdriver
from bs4 import BeautifulSoup
import pandas as pd
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

url = 'https://www.tokopedia.com/search?st=product&q=kopi&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource='
driver = webdriver.Chrome()
driver.get(url)

soup = BeautifulSoup(driver.page_source, "html.parser")
# print(soup)

for item in soup.findAll('div', class_='css-qa82pd'):
    nama_produk = item.find('div', class_='css-974ipl').text
    harga = item.find('div', class_='css-974ipl').text
    lokasi = item.find('div', class_='css-974ipl').text
    toko = item.find('div', class_='css-974ipl').text
    rating = item.find('div', class_='css-974ipl').text
    terjual = item.find('div', class_='css-974ipl').text
    print(nama_produk)
    print(harga)
    print(lokasi)
    print(toko)
    print(terjual)

driver.close()
