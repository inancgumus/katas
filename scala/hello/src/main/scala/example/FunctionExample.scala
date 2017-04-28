package example

object FunctionExample {
  def callMeBack(callback: () => Unit) {
    callback()                    // calling the passed function
  }

  def iAmACallback() {
    println("is there anybody?")
  }

  def run {
    callMeBack(iAmACallback)      // passing the function to another function
                                  // as an argument
  }
}
