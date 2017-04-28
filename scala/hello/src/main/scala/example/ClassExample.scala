package example

class Complex(real: Double, imaginary: Double) {
  def re = real
  def im = imaginary

  // overriding method from Object class which this class has its parent
  override def toString() =
    "" + re + (if (im < 0) "" else "+") + im + "i"
}

object ClassExample {
  def run {
    // instantiating
    val c = new Complex(1.2, 3.4)
    println(s"real: ${c.re}, imaginary: ${c.im}")
    println(c)
  }
}
