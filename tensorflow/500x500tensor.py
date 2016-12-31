import tensorflow as tf

session = tf.InteractiveSession()

t1 = tf.fill([500, 500], 0.5)
t2 = tf.ones([500, 500]) * 0.5

print(t1.eval())
print(t2.eval())
