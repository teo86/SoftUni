function solve(input) {
    let nums = []
    for (let i = 0; i < input.length; i++) {
        nums.push(Number(input[i]))

    }

    let max = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]>=0 && nums[i]<10){
            let count = nums[i]
            let curent = 1

            for (let j = 1; j <= Math.min(count, nums.length-1 - i); j++) {
                curent *= nums[i+j]

            }
            if(curent>max && nums[i]!==0){
                max = curent
            }
        }

    }

    console.log(max)
}
solve([10,20,2,30,44,3,56,20,24])
