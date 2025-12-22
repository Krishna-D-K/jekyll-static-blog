---
title: Understanding Cryptanalysis and Side-Channel Attacks
author: Krishna
categories: [Tech]
description: A brief overview of cryptanalysis and information leakage through the side channels.
comments: true
pin: true
image: /assets/cover/understanding-cryptanalysis.png
tags: ['cryptanalysis', 'security']     # TAG names should always be lowercase
---

---
### Cryptanalysis

In the world of cryptology, there is a creator force and a destroyer force. They together build the foundation of the cryptographic systems we see around us. Cryptography focuses on creating secret codes, unique patterns and not-so-intuitive algorithms and patterns. Why? To **encrypt** the data. Only a person with the correct **key** to **decrypt** the secret can view the plaintext. This is what is the main motive of cryptography.

Now, things change when you find such a loophole or a secret door through which you can view the plaintext without the key. This is cryptanalysis, and the person who practices it is a cryptanalyst.

### So are they hackers?

Umm... No. Even though hackers break the algorithm, cryptanalysts primarily focus on analyzing cryptographic systems and breaking codes. However, hackers concentrate on identifying vulnerabilities and exploiting security weaknesses in computer systems and networks. To analyse the cryptographic systems, you need to know the working of the algorithm behind it. Find the sweet spot within it to decrypt the message.

It is important to attack the system to find these weak points. Such attacks are **cryptanalytic attacks**. There are many forms of cryptanalytic attacks, like

* **Side-channel attacks:** A side-channel is a medium that unknowingly leaks information or data. These side channels are attacked in such an attack.

* **Brute-force attacks:** Trying each possible key to decrypt the message is a brute-force attack. Easy to implement but very time-consuming.

* **Known plaintext attacks:** You need to map a relation from the plaintext and ciphertext, with some previously known plaintext-ciphertext pairs.

* **Man-in-the-middle attack:** A secured channel through which information is being sent is intercepted by the attacker which gets access to the data.


### More about Side Channels

Channels of information leakage could be many. For example, the power consumption of a device or chip running an algorithm may expose the underlying data. Or some frequency emissions that may expose the system. To exploit these leakages, one needs to understand the encryption algorithm, the device behaviour, the memory management etc.

{% include image.html url="../assets/blogs/side-channel-leakage.png" caption="Side channel leakage" %}

The above image shows the power consumption profile of a system that gives away the cache behaviour. If you are unfamiliar with cache, imagine a go-to storehouse where data is stored temporarily. Whenever the processor requests data, it is first checked in the cache and if data is not present, it proceeds into main memory. If the data is in the cache, it is called a cache hit, or else cache miss. Since a main memory lookup requires more time than a cache lookup, the power consumption of the main memory access is greater.

### Side Channel Attacks

Now that we know the source of information leakage, we will look for some of the best and classic attacks that are known. But as the technology develops, the side channels are added with some extra layer of security so that the attacker could not find it easy to extract the information. Hence, these attacks may or may not work on real-life systems. However, we can still stimulate these attacks and see the intrinsic details as we proceed. Some of the future blogs in this series would be on:

* Timing Attacks

* Differential Power Analysis

* Correlation Power Analysis

* AES and its implementation

* Attacks over AES


### Summing Up

I am taking a course on Hardware Security at my college and trying to write my learnings through it in this series :) So, if some of the blogs in the series seem incorrect or irrelevant, please let me know.

Looking forward to a good blog series ✨✨