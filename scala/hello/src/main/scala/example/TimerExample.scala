package example

object TimerExample {
  def oncePerSecond(callback: () => Unit) {
    var i = 0
    while (i < 10) { callback(); Thread sleep 500; i = i + 1 }
  }

  def run {
    oncePerSecond(() => println("time flies like an arrow..."))
  }
}
