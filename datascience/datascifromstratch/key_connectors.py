from __future__ import division
from collections import Counter

# ------------------------------------------------------
# MODELS
# ------------------------------------------------------

users = [
    { "id": 0, "name": "Hero"   },
    { "id": 1, "name": "Dunn"   },
    { "id": 2, "name": "Sue"    },
    { "id": 3, "name": "Chi"    },
    { "id": 4, "name": "Thor"   },
    { "id": 5, "name": "Clive"  },
    { "id": 6, "name": "Hicks"  },
    { "id": 7, "name": "Devin"  },
    { "id": 8, "name": "Kate"   },
    { "id": 9, "name": "Klein"  }
]

friendships = [ (0, 1), (0, 2), (1, 2), (1, 3), (2, 3), (3, 4),
                (4, 5), (5, 6), (5, 7), (6, 8), (7, 8), (8, 9) ]


# ------------------------------------------------------
# MANIPULATIONS
# ------------------------------------------------------

def empty_friends(users):
    for user in users: user["friends"] = []

def add_friends(user1, user2):
    user1["friends"].append(user2)
    user2["friends"].append(user1)

def add_friends_to_all(users, friendships, friend_adder):
    for userId1, userId2 in friendships:
        friend_adder(users[userId1], users[userId2])

def sort_by_friends_count(users, num_of_friends_by_id, reverse=True):
    return sorted(
        num_of_friends_by_id,
        key=lambda stats: stats[1],
        reverse=reverse)


# ------------------------------------------------------
# CALCULATIONS
# ------------------------------------------------------

def num_of_friends(user):
    """"how many friends does _user_ have?"""
    return len(user["friends"])

def num_of_friends_by_id(users):
    return [(user["id"], num_of_friends(user)) for user in users]

def total_conns(users):
    return sum(num_of_friends(user) for user in users)

def avg_conns(users, total_conns):
    return total_conns(users) / len(users)


# ------------------------------------------------------
# RUN
# ------------------------------------------------------

empty_friends(users)
add_friends_to_all(users, friendships, add_friends)

ids             = num_of_friends_by_id(users)
highest_friends = sort_by_friends_count(users, ids)


def the_same(user, other_user):
    """two users are not the same if they have different ids"""
    return user["id"] == other_user["id"]

def arent_me(user, other_user):
    return not the_same(user, other_user)

def arent_my_friend(user, other_friend):
    return not friends(user, other_friend)

def friends(user, other_user):
    """other_user is not a friend if he's not in user["friends"];
    that is, if he's not_the_same as all the people in user["friends"]"""
    return any(the_same(friend, other_user) for friend in user["friends"])

def mutual_friends(me):
    return [
        other_friend["id"]
        for friend       in     me["friends"]
        for other_friend in friend["friends"]
        if  arent_me(me, other_friend)
        and arent_my_friend(me, other_friend)]


# ------------------------------------------------------
# LOGGING
# ------------------------------------------------------

def headline(header): print("\n[["+ header.upper() +"]]")

def list_friendships(users, printer):
    for user in users:
        printer(str(user["id"]) +"'s friends are:",
            [str(friend["id"]) for friend in user['friends']])

headline("stats")
print("sum users : "+ str(len(users)))
print("sum conns : "+ str(total_conns(users)))
print("avg conns : "+ str(avg_conns(users, total_conns)) +"%")

headline("friends"); list_friendships(users, print)

headline("count of mutual friends")
for user in users: print(user["id"], "'s", Counter(mutual_friends(user)))
