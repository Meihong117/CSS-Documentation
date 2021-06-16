<div class="box"></div>

document.querySelector("ul"); ----------> <ul id="before" class="before_ex_ul">
document.querySelector(".box")----------> <div class="box">
same as
document.getElementById("before");------> <ul id="before" class="before_ex_ul">

document.getElementsByClassName("ul"); -> HTMLCollection { length: 0 }


------------------------------------------------------------------------------------------------------
**Chnage/Add/Replace ClassName:

let dots = document.getElementsByClassName("demo");
dots[i].className.replace(" active", "") : 

1. To <change> all classes for an element and to replace all the existing classes with one or more new classes, 
set the className attribute like this: 

dots.className = "MyClass"; 

2. To <add> an additional class to an element and to add the class to an element, without removing/affecting existing values, 
append a space and the new classname, this way:

dots.className += " MyClass";

3. To <remove> a class from an element and to remove a single class to an element, without affecting other potential classes, 
a simple regex replace is required like this:

dots.className =dots.className.replace( "sth" , '' )
------------------------------------------------------------------------------------------------------
** this.nextElementSibling
The nextElementSibling property returns the element immediately following the specified element, in the same tree level.
------------------------------------------------------------------------------------------------------
**.addEventListener(): 
得用getElementById/querySelector得到的结果可以用.addEventListener(). 不能用.getElementsByClassName

eg:
<button id="myBtn">Try it</button>
document.getElementById("myBtn").addEventListener("click", function() {...});
but if:
document.getElementsByClassName("ul").addEventListener("click", function() {...});
will cause: ERROR
Uncaught TypeError:l ist1.addEventListener is not a function
------------------------------------------------------------------------------------------------------
** .classList.add()/.contains(classname)/.item(index)/.remove(classname1, classname2, ...)/.toggle(classname, true|false)
eg:
document.getElementById("myDIV").classList.add("mystyle");
(mystyle is css code: .mystyle{...})
------------------------------------------------------------------------------------------------------
**window.requestAnimationFrame()
    You should call this method whenever you're ready to update your animation onscreen. 
    This will request that your animation function be called before the browser performs the next repaint. 
    The number of callbacks is usually 60 times per second, but will generally match the display refresh 
    rate in most web browsers as per W3C recommendation. requestAnimationFrame() calls are paused in most 
    browsers when running in background tabs or hidden <iframe>s in order to improve performance and battery life.
