# string = input("Enter a word: ")

# reversed_string = ""
# for char in string:
#     reversed_string = char + reversed_string
# if string == reversed_string:
#     print("It's a palindrome!")
# else:
#     print("Not a palindrome!")


# string = input("Enter a word: ")
# if string == string[::-1]:
#     print("It's a palindrome!")
# else:
#     print("Not a palindrome!")


# a =[2,3,5,7,8]
# rev = a[::-1]
# print(rev)

# far = float(input("Enter temperature in Fahrenheit: "))
# cel = (far - 32) * (5 / 9)
# print(cel, "in Celsius")


# a = input("Enter the first string: ")
# b = input("Enter the second string: ")

# if len(a) != len(b):
#     print("The strings are not anagrams.")
# else:
#     if sorted(a) == sorted(b):
#         print("The strings are anagrams.")
#     else:
#         print("The strings are not anagrams.")

# def fact(n):
#     if n == 0 or n ==1:
#          return 1
#     else:
#         return n*fact(n-1)

# n = int(input("enter a number: "))
# print(fact(n))


# n = int(input("Enter a number: "))
# result = 0
# a = str(n)
# b = len(a)

# for i in a:
#     result += int(i) ** b

# print(result)



# import re

# def valid_palindrome(n):

#     cleaned_string = re.sub(r'[^a-zA-Z0-9]', "", n)

#     if cleaned_string.lower() == cleaned_string.lower()[::-1]:
#         print("palindrome")
#     else:
#         print("not")

# n = "A man, a plan, a canal: Panama"
# valid_palindrome(n)

# import re

# def valid_palindrome(n):
#     cleaned_string = re.sub(r'[^a-zA-Z0-9]', "",n)
#     if cleaned_string.lower() ==cleaned_string.lower()[::-1]:
#         print("palindrome")
#     else:
#         print("no")

# n = "A man, a plan, a canal: Panama"
# valid_palindrome(n)
    

def pascal_triangle(rows):
    for i in range(rows):
        # Print leading spaces for formatting
        for j in range(rows - i - 1):
            print(" ", end="")
        # Each row starts with 1
        row = [1]
        # Each subsequent number is the sum of the two numbers above it
        for j in range(1, i + 1):
            row.append(row[-1] * (i - j + 1) // j)
        # Print the current row
        for num in row:
            print(num, end=" ")
        print()  # New line for the next row

# Example: Generating Pascal's Triangle with 5 rows
rows = 5
pascal_triangle(rows)


