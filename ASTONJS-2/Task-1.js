function getLength(arr) {
  if (arr != NaN)
    if ((arr?.length ?? 0) || (arr?.size ?? 0))
      console.log(arr.length || arr.size);
    else console.log(0);
}

getLength(arr);
