import tensorflow as tf

session = tf.InteractiveSession()

x = tf.constant([[1, 2]])
neg_x = tf.neg(x)

print(neg_x)
print("before neg: ", x.eval())
print("after neg : ", neg_x.eval())
