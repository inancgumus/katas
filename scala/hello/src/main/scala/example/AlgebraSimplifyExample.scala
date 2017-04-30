package example

abstract class Tree

case class Sum(l: Tree, r: Tree) extends Tree {
  override def toString = s"( $l + $r )"
}

case class Minus(l: Tree, r: Tree) extends Tree {
  override def toString = s"( $l - $r )"
}

case class Times(l: Tree, r: Tree) extends Tree {
  override def toString = s"( $l * $r )"
}

case class Divide(l: Tree, r: Tree) extends Tree {
  override def toString = s"( $l / $r )"
}

case class Var(n: String) extends Tree {
  override def toString = n
}

case class Const(v: Int) extends Tree {
  override def toString = v.toString
}

object AlgebraSimplifyExample {
  def simplify(t: Tree): Tree = t match {
    case Times(Const(1), r)     => simplify(r)
    case Times(l, Const(1))     => simplify(l)
    case Times(Const(0), r)     => Const(0)
    case Times(l, Const(0))     => Const(0)
    case Sum(Const(0), r)       => simplify(r)
    case Sum(l, Const(0))       => simplify(l)
    case Minus(l, Const(0))     => simplify(l)
    case Minus(l, r) if l == r  => Const(0)
    case Divide(Const(0), r)    => Const(0)
    case Divide(l, Const(1))    => simplify(l)
    case Divide(l, r) if l == r => Const(1)
    case Times(l, r)            => Times(simplify(l), simplify(r))
    case Sum(l, r)              => Sum(simplify(l), simplify(r))
    case Minus(l, r)            => Minus(simplify(l), simplify(r))
    case Divide(l, r)           => Divide(simplify(l), simplify(r))  
    case _                      => t
  }

  def run {
    // Expression: ( ( ( ( ( 1 * x ) - 0 ) + ( 0 + y ) ) + 0 ) / 1 )
    // Simplified: ( x + y )
    lazy val exp: Tree = 
      Divide(
        Sum(
          Sum(
            Minus(
              Times(
                Const(1), 
                Var("x")
              ),
              Const(0)
            ),
            Sum(
              Const(0), 
              Var("y")
            )
          )
          , Const(0)
        ),
        Const(1)
      )

    println("Expression: " + exp)
    println("Simplified: " + simplify(exp))
  }
}
