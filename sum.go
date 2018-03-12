package main

import (
	"fmt"
)

func sum(s []int, c chan int) {

	sum := 0

	for _, v := range s {
		sum += v
	}

	c <- sum
}

func Sum(s []int, parts int) int {

	if parts > len(s) {
		parts = len(s)
	}

	c := make(chan int)

	part_length := len(s) / parts

	for i := 0; i < parts; i++ {
		go sum(s[i*part_length:(i+1)*part_length], c)
	}

	if len(s)%parts > 0 {
		go sum(s[(parts)*part_length:len(s)], c)
		parts++
	}

	ans := 0

	for i := 0; i < parts; i++ {
		ans += <-c
	}

	return ans
}

func main() {
	s := []int{1, 2, 3, 4, 5, 6, 7, 8}
	fmt.Println(Sum(s, 4))
	fmt.Println(Sum(s, 2))
	fmt.Println(Sum(s, 1))
	fmt.Println(Sum(s, 8))
	fmt.Println(Sum(s, 7))
}
