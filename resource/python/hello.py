from browser import window

def hello(n):
    for x in range(1,n+1):
        print(f"{x} Hello World!")

window.hello = hello
