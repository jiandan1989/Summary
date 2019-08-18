### Cron 表达式前端校验

> 同事问起知不知道这个 cron 表达式的标准格式,听到这个词的时候,就在想,这是个什么鬼,然后百度了以下,原来是`spring` 框架(`Java`开发)中的一个常用表达式,顺便看了下标准格式,就感觉这东西 怎么这么强大,和正则很像.就在想这个东西的正则校验方法怎么写.想了半天也没写出来....

> 百度出来了一个,存一下,日后如果再次用到就方便点, 经过测试, 当日期为 L 时 校验不通过

[以下是来自 CSDN 博客原文, 作者请勿怪](http://m.blog.csdn.net/wangshuang1631/article/details/53012146)
[github 上找了一个,不过好像不是很灵](https://github.com/kelektiv/node-cron/blob/master/README.md)
[npm cron 第一个](https://www.npmjs.com/package/cron)

```vim
# npm
npm install --save cron
```

```javascript
const a = [
  '0 0 10,14,16 * * ?', // 1
  '0 0/30 9-17 * * ?', //2
  '0 0 12 * * ?', // 3
  '* 0/1 * * 1/1 ?', // 4
  '0 15 10 ? * *', //5
  '0 15 10 * * ?', //6
  '0 15 10 * * ? *', // 7
  '0 15 10 * * ? 2005', //8
  '0 * 14 * * ?', // 9
  '0 0/5 14 * * ?', // 10
  '0 0/5 14,18 * * ?', //11
  '0 0-5 14 * * ?', //12
  '0 15 10 ? * 6L 2002-2005', //13
  '0 15 10 15 * ?', //14
  '0 15 10 L * ?', // 15
  '0 15 10 ? * 6L', //16
  '0 15 10 ? * 6#3', // 17
  '0 0 12 ? * WED', // 18
  '0 15 10 ? * MON-FRI', // 19
  '0 44 14 ? 3 MON', //20
  '0 30 11 ? * 1-5', //21
  '0 0 0 1 8 ? 2046', //22
  '* 0/1 * * 1/1 1L 2016-2017', //23
  '* 0/1 * * 1/1 1L', //24
  '0 0 0 2 8/2 ? 2046', //25
  '* * * L 2/2 ?' //26
];

function cronValidate(value) {
  return CronExpressionValidator.validateCronExpression(value);
}

function CronExpressionValidator() {}

CronExpressionValidator.validateCronExpression = function(value) {
  var results = true;
  if (value == null || value.length == 0) {
    return false;
  }

  // split and test length
  var expressionArray = value.split(' ');
  var len = expressionArray.length;

  if (len != 6 && len != 7) {
    return false;
  }

  // check only one question mark
  var match = value.match(/\?/g);
  if (match != null && match.length > 1) {
    return false;
  }

  // check only one question mark
  var dayOfTheMonthWildcard = '';

  // if appropriate length test parts
  // [0] Seconds 0-59 , - * /
  if (CronExpressionValidator.isNotWildCard(expressionArray[0], /[\*]/gi)) {
    if (
      !CronExpressionValidator.segmentValidator(
        '([0-9\\\\,-\\/])',
        expressionArray[0],
        [0, 59],
        'seconds'
      )
    ) {
      return false;
    }
  }

  // [1] Minutes 0-59 , - * /
  if (CronExpressionValidator.isNotWildCard(expressionArray[1], /[\*]/gi)) {
    if (
      !CronExpressionValidator.segmentValidator(
        '([0-9\\\\,-\\/])',
        expressionArray[1],
        [0, 59],
        'minutes'
      )
    ) {
      return false;
    }
  }

  // [2] Hours 0-23 , - * /
  if (CronExpressionValidator.isNotWildCard(expressionArray[2], /[\*]/gi)) {
    if (
      !CronExpressionValidator.segmentValidator(
        '([0-9\\\\,-\\/])',
        expressionArray[2],
        [0, 23],
        'hours'
      )
    ) {
      return false;
    }
  }

  // [3] Day of month 1-31 , - * ? / L W C
  if (CronExpressionValidator.isNotWildCard(expressionArray[3], /[\*\?]/gi)) {
    if (
      !CronExpressionValidator.segmentValidator(
        '([0-9LWC\\\\,-\\/])',
        expressionArray[3],
        [1, 31],
        'days of the month'
      )
    ) {
      return false;
    }
  } else {
    dayOfTheMonthWildcard = expressionArray[3];
  }

  // [4] Month 1-12 or JAN-DEC , - * /
  if (CronExpressionValidator.isNotWildCard(expressionArray[4], /[\*]/gi)) {
    expressionArray[4] = CronExpressionValidator.convertMonthsToInteger(
      expressionArray[4]
    );
    if (
      !CronExpressionValidator.segmentValidator(
        '([0-9\\\\,-\\/])',
        expressionArray[4],
        [1, 12],
        'months'
      )
    ) {
      return false;
    }
  }

  // [5] Day of week 1-7 or SUN-SAT , - * ? / L C #
  if (CronExpressionValidator.isNotWildCard(expressionArray[5], /[\*\?]/gi)) {
    expressionArray[5] = CronExpressionValidator.convertDaysToInteger(
      expressionArray[5]
    );
    if (
      !CronExpressionValidator.segmentValidator(
        '([0-9LC#\\\\,-\\/])',
        expressionArray[5],
        [1, 7],
        'days of the week'
      )
    ) {
      return false;
    }
  } else {
    if (dayOfTheMonthWildcard == String(expressionArray[5])) {
      return false;
    }
  }

  // [6] Year empty or 1970-2099 , - * /
  if (len == 7) {
    if (CronExpressionValidator.isNotWildCard(expressionArray[6], /[\*]/gi)) {
      if (
        !CronExpressionValidator.segmentValidator(
          '([0-9\\\\,-\\/])',
          expressionArray[6],
          [1970, 2099],
          'years'
        )
      ) {
        return false;
      }
    }
  }
  return true;
};

// ----------------------------------
// isNotWildcard 静态方法;
// ----------------------------------
CronExpressionValidator.isNotWildCard = function(value, expression) {
  var match = value.match(expression);
  return match == null || match.length == 0 ? true : false;
};

// ----------------------------------
// convertDaysToInteger 静态方法;
// ----------------------------------
CronExpressionValidator.convertDaysToInteger = function(value) {
  var v = value;
  v = v.replace(/SUN/gi, '1');
  v = v.replace(/MON/gi, '2');
  v = v.replace(/TUE/gi, '3');
  v = v.replace(/WED/gi, '4');
  v = v.replace(/THU/gi, '5');
  v = v.replace(/FRI/gi, '6');
  v = v.replace(/SAT/gi, '7');
  return v;
};

// ----------------------------------
// convertMonthsToInteger 静态方法;
// ----------------------------------
CronExpressionValidator.convertMonthsToInteger = function(value) {
  var v = value;
  v = v.replace(/JAN/gi, '1');
  v = v.replace(/FEB/gi, '2');
  v = v.replace(/MAR/gi, '3');
  v = v.replace(/APR/gi, '4');
  v = v.replace(/MAY/gi, '5');
  v = v.replace(/JUN/gi, '6');
  v = v.replace(/JUL/gi, '7');
  v = v.replace(/AUG/gi, '8');
  v = v.replace(/SEP/gi, '9');
  v = v.replace(/OCT/gi, '10');
  v = v.replace(/NOV/gi, '11');
  v = v.replace(/DEC/gi, '12');
  return v;
};

// ----------------------------------
// segmentValidator 静态方法;
// ----------------------------------
CronExpressionValidator.segmentValidator = function(
  expression,
  value,
  range,
  segmentName
) {
  var v = value;
  var numbers = new Array();

  // first, check for any improper segments
  var reg = new RegExp(expression, 'gi');
  if (!reg.test(v)) {
    return false;
  }

  // check duplicate types
  // check only one L
  var dupMatch = value.match(/L/gi);
  if (dupMatch != null && dupMatch.length > 1) {
    return false;
  }

  // look through the segments
  // break up segments on ','
  // check for special cases L,W,C,/,#,-
  var split = v.split(',');
  var i = -1;
  var l = split.length;
  var match;

  while (++i < l) {
    // set vars
    var checkSegment = split[i];
    var n;
    var pattern = /(\w*)/;
    match = pattern.exec(checkSegment);

    // if just number
    pattern = /(\w*)\-?\d+(\w*)/;
    match = pattern.exec(checkSegment);

    if (
      match &&
      match[0] == checkSegment &&
      checkSegment.indexOf('L') == -1 &&
      checkSegment.indexOf('l') == -1 &&
      checkSegment.indexOf('C') == -1 &&
      checkSegment.indexOf('c') == -1 &&
      checkSegment.indexOf('W') == -1 &&
      checkSegment.indexOf('w') == -1 &&
      checkSegment.indexOf('/') == -1 &&
      (checkSegment.indexOf('-') == -1 || checkSegment.indexOf('-') == 0) &&
      checkSegment.indexOf('#') == -1
    ) {
      n = match[0];

      if (n && !isNaN(n)) numbers.push(n);
      else if (match[0] == '0') numbers.push(n);
      continue;
    }
    // includes L, C, or w
    pattern = /(\w*)L|C|W(\w*)/i;
    match = pattern.exec(checkSegment);

    if (
      match &&
      match[0] != '' &&
      (checkSegment.indexOf('L') > -1 ||
        checkSegment.indexOf('l') > -1 ||
        checkSegment.indexOf('C') > -1 ||
        checkSegment.indexOf('c') > -1 ||
        checkSegment.indexOf('W') > -1 ||
        checkSegment.indexOf('w') > -1)
    ) {
      // check just l or L
      if (checkSegment == 'L' || checkSegment == 'l') continue;
      if (segmentName === 'days of the month' && value === 'L') {
        console.log(expression, value);
      }
      pattern = /(\w*)\d+(l|c|w)?(\w*)/i;
      match = pattern.exec(checkSegment);

      // if something before or after
      if (!match || match[0] != checkSegment) {
        continue;
      }

      // get the number
      var numCheck = match[0];
      numCheck = numCheck.replace(/(l|c|w)/gi, '');

      n = Number(numCheck);

      if (n && !isNaN(n)) numbers.push(n);
      else if (match[0] == '0') numbers.push(n);
      continue;
    }

    var numberSplit;

    // includes /
    if (checkSegment.indexOf('/') > -1) {
      // take first #
      numberSplit = checkSegment.split('/');

      if (numberSplit.length != 2) {
        continue;
      } else {
        n = numberSplit[0];

        if (n && !isNaN(n)) numbers.push(n);
        else if (numberSplit[0] == '0') numbers.push(n);
        continue;
      }
    }

    // includes #
    if (checkSegment.indexOf('#') > -1) {
      // take first #
      numberSplit = checkSegment.split('#');

      if (numberSplit.length != 2) {
        continue;
      } else {
        n = numberSplit[0];

        if (n && !isNaN(n)) numbers.push(n);
        else if (numberSplit[0] == '0') numbers.push(n);
        continue;
      }
    }

    // includes -
    if (checkSegment.indexOf('-') > 0) {
      // take both #
      numberSplit = checkSegment.split('-');

      if (numberSplit.length != 2) {
        continue;
      } else if (Number(numberSplit[0]) > Number(numberSplit[1])) {
        continue;
      } else {
        n = numberSplit[0];

        if (n && !isNaN(n)) numbers.push(n);
        else if (numberSplit[0] == '0') numbers.push(n);
        n = numberSplit[1];

        if (n && !isNaN(n)) numbers.push(n);
        else if (numberSplit[1] == '0') numbers.push(n);
        continue;
      }
    }
  }
  // lastly, check that all the found numbers are in range
  i = -1;
  l = numbers.length;

  if (l == 0) return false;

  while (++i < l) {
    // alert(numbers[i]);
    if (numbers[i] < range[0] || numbers[i] > range[1]) {
      return false;
    }
  }
  return true;
};

const results = a.map(item => cronValidate(item));
console.log(results);
```
