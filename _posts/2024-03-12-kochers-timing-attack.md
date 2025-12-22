---
title: Kocher's Timing Attack
author: Krishna
categories: [Tech]
description: Performing a classic Kocher's Timing Attack on the famous RSA encryption algorithm
comments: true
pin: true
image: /assets/cover/kochers-timing-attack.png
tags: ['cryptanalysis', 'rsa']     # TAG names should always be lowercase
---

---

In part 2 of the **Cryptanalysis and Side-Channel Attack Series**, we will perform a simulated attack on the famous RSA encryption algorithm. Even though the real-time and the simulated attacks differ greatly, the simulated attack will give us a deeper understanding and appreciation of Kocher's Timing Attack.

### Paul Kocher

Paul Kocher is an American cryptographer and cryptography entrepreneur who founded Cryptography Research, Inc. (CRI) and served as its president and chief scientist.

He pioneered the field of side-channel attacks, including the development of timing attacks that can break implementations of RSA, DSA and fixed-exponent Diffie–Hellman that operate in non-constant time, as well as the co-development of power analysis and differential power analysis. His side-channel attack countermeasure designs are widely deployed in secure integrated circuits and other cryptographic devices. He has also worked on microprocessor security and co-discovered and named the spectre vulnerability. (*reference* [Wikipedia](https://en.wikipedia.org/wiki/Paul_Carl_Kocher))

### Encryption Algorithms

We can broadly divide the encryption algorithms in two ways: symmetric and asymmetric algorithms. Symmetric algorithms use the same key for encryption as well as decryption. For example, the AES and DES encryption algorithms, which are widely popular are symmetric cryptography algorithms. On the other hand, asymmetric cryptography algorithms use different keys for encrypting and decrypting the data. The RSA algorithm, discussed below, is an asymmetric cryptography algorithm.

{% include image.html url="../assets/blogs/symmetric-asymmetric.png" caption="Symmetric v/s Asymmetric Algorithm" %}

### RSA Algorithm

RSA is a public key cryptosystem, one of the oldest and most widely used for data transmission. It was publicly described by Ron Rivest, Adi Shamir and Leonard Adleman (**R**ivest**S**hamir**A**dleman). The idea is to encrypt the plaintext through the public key available in the server and decrypt it using a secret key known only to the receiver of the message.

The mathematics behind it is that it is difficult to factorize a large integer into two prime factors, especially when the two primes involved are about 128 bits long. The private key is also derived from the prime numbers. The brute force approach will lead to an exponential time complexity, and hence not feasible to perform. The detailed mathematical expressions are given as follows.

$$\begin{array}{l} \text{Let } N \text{ be the public key which is a factor of primes } p \text{ and } q. \\ \text{We define Euler's Totient Function } \phi (n) = (p-1) \cdot (q-1) \\ e\text{ is the public key available for encryption and } d \text{ is the private key for decryption.} \\ e \cdot d \equiv 1 \pmod{\phi (n)} \\ \text{If } m \text{ is the plaintext and } M \text{ is the encrypted text, then -} \\ M \equiv m^{e} \pmod{N} \text{ and } m \equiv M^{d} \pmod{N} \end{array}$$

To understand better how the actual implementation works, consider the code snippet below

```python
# Taking two primes p = 281 and q = 337
# Euler Totient Function: φ = (p-1)*(q-1) = 94080
# N = p*q = 94697
# Assuming public key (e) = 31
# Private Key Calculated (d) --> e*d = 1(mod φ) --> d = 75871

public_key = int(31)
private_key = int(75871)
N = int(94697)
eulerTotientFn = int(94080)

def binaryExponentiation(base:int, exp:int, mod:int):
    ans = 1
    for i in range(0, 32):
        if((exp>>i)&1):
            ans = (ans * base)%mod
        else:
            None
        base = (base * base)%mod
    return ans%mod

def RSA_Encryption(plaintext: int, public_key: int):
    return binaryExponentiation(plaintext, public_key, N)

def RSA_Decryption(ciphertext: int, private_key: int):
    return binaryExponentiation(ciphertext, private_key, N)

plainText = 100
cipherText = RSA_Encryption(plainText, public_key)
print("The cipher for plaintext", plainText, "is:", cipherText)
decryptedText = RSA_Decryption(cipherText, private_key)
print("The decrypted cipher", cipherText, "is:", decryptedText)
```

We took *p* = 281 and *q* = 337 in the above code, both prime numbers. The Euler Totient Function(*φ*) then becomes *(p-1).(q-1)* = 94697. If we assume public key(*e*) to be 31, then one of the private keys(d) is 75871. We can verify that *e.d = 1 (mod φ).*

We used the binary exponentiation algorithm to compute m<sup>e</sup> (mod N). For those who don't know about binary exponentiation, it performs the exponentiation efficiently. If normal exponentiation takes time complexity of O(n), then binary exponentiation takes around O(log(n)) time complexity. For details, you may read [https://cp-algorithms.com/algebra/binary-exp.html](https://cp-algorithms.com/algebra/binary-exp.html)

On executing the code, we get the output as

{% include image.html url="../assets/blogs/code-exec-terminal-1.png" caption="Ciphering and decyphering output" %}

This verifies that the code works correctly!

**NOTE:** Understand that if any of the *d, φ* or *p* is exposed, then the security of the algorithm is compromised.

### Kocher's Timing Attack

Paul Kocher in his paper ([https://paulkocher.com/doc/TimingAttacks.pdf](https://paulkocher.com/doc/TimingAttacks.pdf)) points out a great observation that we can accurately predict the private key *d* if we observe the statistical trend in the execution timings of the RSA algorithm. As we know that the RSA algorithm implements a binary exponentiation algorithm, we can target the execution time of it to analyse the results. To understand it more in the context of the RSA algorithm,

Let us assume that the attacker knows the last ***k*** bits of the key ***d***. Also assume that the time required for encrypting the plaintext with the correct key ***d*** is ***T***.

$$T = e + \sum_{i=0}^{b-1}t_{i}$$

where ***e*** is the timing measurement error and ***t<sub>i</sub>*** denotes the time needed to finish computation corresponding to the i<sup>th </sup> bit of the key ***d*** (assuming key length = b bits). Since the attacker knows the last ***k*** correct bits of ***d*** ( *d\[0\], d\[1\], d\[2\]... d\[k-1\]* ), he guesses the **(k+1)**<sup>th </sup> bit (either 0 or 1). Assume that the time needed to encrypt up to (k+1)<sup>th</sup> bit of the secret is **T<sup>*</sup>**.

$$\begin{gather*} T^{*} = \sum_{i=0}^{k}t_{i} \\ T - T^{*} = (e + \sum_{i=0}^{b-1}t_{i}) - (\sum_{i=0}^{k}t_{i} ) \\ T - T^{*} = (e + \sum_{i=k+1}^{b-1}t_{i}) + (t_{k} - t_{k}^{*}) \end{gather*}$$

where **t<sub>k</sub>** is the time needed for encryption using the **k<sup>th</sup>** bit (actual time) and **t<sub>k</sub><sup>*</sup>** is the time needed for the guessed **k<sup>th</sup>** bit of the secret (guessed time). On statistical analysis of the equation,

$$\begin{gather*} Var(T - T^{*}) = Var(e) + Var(\sum_{i=k+1}^{b-1}t_{i}) + Var(t_{k} - t_{k}^{*}) \end{gather*}$$

On analysing the equation, if our guess for the kth bit is correct, Var(t<sub>k</sub> - t<sub>k</sub>\*) would be zero, because t<sub>k</sub> = t<sub>k</sub>\*. Or else it will be greater than zero. This gives us an important observation, that a ***correct guess will decrease the variance while an incorrect guess increases the variance.***

### Simulating the attack

As we need to compute the binary exponentiation for the RSA algorithm, we will introduce a flag in the algorithm to stop computation at any corresponding bit. The modified binary exponentiation algorithm looks like below, which stops after the computation of the i<sup>th</sup> bit ( d\[0\], d\[1\],..., d\[i\])

```python
mod = int(94697)
def modularExponentiation(base:int, exp:int, flag:int):
    ans = 1
    for i in range(0, 32):
        if(i>flag):return ans%mod
        if((exp>>i)&1):
            ans = (ans * base)%mod
        else:
            None
        base = (base * base)%mod
    return ans%mod

def RSA_Encryption_Algorithm(plaintext:int, public_key:int, flag:int):
    return modularExponentiation(plaintext, public_key,flag)

def RSA_Decryption_Algorithm(cipher:int, private_key:int, flag:int):
    return modularExponentiation(cipher, private_key, flag)
```

We will be storing the actual simulation results in simulations.csv file. This has the encryption time for the numbers from 1 to 10000.

```python
import time
import csv

with open("simulations.csv", 'w') as csvFile:
    csvWriter = csv.writer(csvFile)
    for i in range(1,10000):
        timeStart = time.time_ns()
        # plaintext = i
        # public_key = 31
        # flag = 32 (assuming the public key is of 32 bits)
        encrypted_text = RSA_Encryption_Algorithm(i, 31, 32)
        timeElapsed = time.time_ns() - timeStart
        csvWriter.writerow([timeElapsed])
```

With the data stored in a CSV file, we now compute the first correct key bit. It can either be 0 or 1, hence the key will be 0 (0b0000) or 1 (0b0001).

```python
import time
import csv
import numpy as np

oneList = []
zeroList = []

for i in range(1,10000):
    timeStart = time.time_ns()
    # guessed key = 0b0001 = 1
    encrypted_text = RSA_Encryption_Algorithm(i, 1, 0)
    timeElapsed = time.time_ns() - timeStart
    oneList.append(timeElapsed)

for i in range(1,10000):
    timeStart = time.time_ns()
    # guessed key = 0b0000 = 0
    encrypted_text = RSA_Encryption_Algorithm(i, 0, 0)
    timeElapsed = time.time_ns() - timeStart
    zeroList.append(timeElapsed)


with open("simulations.csv", 'r') as sim:
    siml = list(csv.reader(sim))
    for i in range(0,9999):
        oneList[i] = int(siml[i][0]) - oneList[i]
        zeroList[i] = int(siml[i][0]) - zeroList[i]

print("Zero's Variance = ", np.var(zeroList))
print("One's Variance = ", np.var(oneList))
```

On running the above code we get something like this:

{% include image.html url="../assets/blogs/code-exec-terminal-2.png" caption="Variance computation output" %}

Remember our private key, 75871 (**0b10010100001011111**) with the 0<sup>th</sup> bit as 1. Hence we expect the variance of 1 to be less than 0, as seen in the results.

To look further, assume that we want to know the 6th bit of the key, which is at index 5. Our two guessed keys will now be 0b011111 (31) and 0b111111 (63). Let us change the code `encrypted_text = RSA_Encryption_Algorithm(i, 63, 5)` for oneList and `encrypted_text = RSA_Encryption_Algorithm(i, 31, 5)` for zeroList. We get:

{% include image.html url="../assets/blogs/code-exec-terminal-3.png" caption="Trying variance computation multiple times" %}

In all these cases we get one's variance greater than zero's, which means zero is the correct bit at index 5. (As can be observed!)

### Conclusion

To get accurate results for every iteration, we need to increase the sample space, which currently has only 10<sup>4</sup> points. Increasing it improves the discrepancy that we see in some of the results of the simulations.

However, on a larger sample space, it is proved that Kocher's Timing Attack can accurately guess the complete key at much less time and memory complexity. Hence it becomes complicated to prevent this kind of attack. In the forthcoming blogs, we'll see some of the effective countermeasures against these attacks.

Until then, appreciate the design of this attack and let me know if you find anything incorrect in the article.