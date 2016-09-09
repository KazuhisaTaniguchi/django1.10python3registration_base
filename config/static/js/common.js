$("#test_btn").click(function () {
  var grip_r = get_max_value($('#id_grip_strength_r').val());
  document.getElementById("id_grip_strength_r").value = grip_r;
  var grip_l = get_max_value($('#id_grip_strength_l').val());
  document.getElementById("id_grip_strength_l").value = grip_l;
  var long_bending = get_max_value($('#id_long_bending').val());
  document.getElementById("id_long_bending").value = long_bending;
  var effects = get_max_value($('#id_effects').val());
  document.getElementById("id_effects").value = effects;
  var disorders_gait = get_max_value($('#id_disorders_gait_10m').val());
  document.getElementById("id_disorders_gait_10m").value = disorders_gait;
  var iterator_next_jump = get_max_value($('#id_iterator_next_jump').val());
  document.getElementById("id_iterator_next_jump").value = iterator_next_jump;
  var standing_broad_jump = get_max_value($('#id_standing_broad_jump').val());
  document.getElementById("id_standing_broad_jump").value = standing_broad_jump;
});

function get_max_value(values){
  var max_value = 0.0
  if (values != ''){
    // spaceが全角がある時python側にエラーを投げる
    if ( values.indexOf('　') != -1) {
      return 'スペースが全角になってます';
    }
    value_list = values.split(' ')
    // 要素が3つ以上だとエラー文字をpython側に投げる
    if (value_list.length >= 3) {
      return '測定の数は２個までです';
    }
    for (var i = 0; i < value_list.length; i ++) {
      value_list[i] = parseFloat(value_list[i])
      if (max_value < value_list[i]){
        max_value = value_list[i];
      }
    }
    return max_value
  }else{
    return values
  }
  return values
}
