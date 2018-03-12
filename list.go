package main

import (
	"fmt"
)

type node struct {
	payload int
	next    *node
}

type List struct {
	head *node
	tail *node
}

func (l *List) Add(value int) {

	if l.tail == nil {

		l.head = &node{value, nil}
		l.tail = l.head
	} else {

		l.tail.next = &node{value, nil}
		l.tail = l.tail.next

		if l.head == nil {
			l.head = l.tail
		}
	}
}

func (l *List) Print() {

	cur := l.head

	for cur != nil {
		fmt.Printf("%v ", cur.payload)
		cur = cur.next
	}

	fmt.Println()
}

func main() {
	var l List
	l.Print()

	l.Add(5)
	l.Add(7)
	l.Add(4)
	l.Print()

	l.Add(53453)
	l.Add(666)
	l.Print()
}
