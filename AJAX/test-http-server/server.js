export default {
	'/handler/': function({post}) {
        return ((+post.num1) + (+post.num2) + (+post.num3) + (+post.num4) + (+post.num5)) / 5;
    }
}