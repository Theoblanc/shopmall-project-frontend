import React from "react";
import styled from "styled-components";

const StepName = styled.h4`
margin-bottom: 10px;
font-size: 16px;
font-weight: 600;
`;


const FormWarp = styled.div`
margin: 10px auto 15px;

`;

const Table = styled.table`
width: 100%;
border-collapse: separate;
border-top: 1px solid #666;
border-bottom: 1px solid #aaa;
border-right: 0;
tbody {
    display: table-row-group;
    vertical-align: middle;
}

tr {
    display: table-row;
    vertical-align: middle;
}
th {
    background: #f9f9f9;
    border-top: 1px solid #ddd;
    padding-left: 30px;
    padding: 13px 15px;
    text-align: left;
    vertical-align: top;
    font-weight: 600;
    color: #666;
    font-size: 12px;
}
td {
    border-top: 1px solid #ddd;
    background: #fff;
    border-left: 1px solid #eee;
    padding: 10px 15px;
    text-align: left;
    input: {
        border: 1px solid #ccc;
        background: #fff;
        height: 20px;
        line-height: 20px;
        text-indent: 3px;
        padding: 0;

        text-rendering: auto;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: start;
        margin: 0em;
        font: 400 12px Arial;
    }
    span {
        font-size: 11px;
        color: #848484;
    }
    select {
        border: 1px solid #ccc;
        border-radius: 0;
        height: 22px;
        line-height: 22px;
        padding: 0 20px 0 3px;
        vertical-align: middle;
        text-rendering: auto;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: start;
        margin: 0em;
        font: 400 12px Arial;

    }
    div {
        font-size: 11px;
        color: #848484;
    }
}


`;


export default () => (
    <>
    <StepName>회원정보 입력</StepName>
    <Table>
    <FormWarp>
	<colgroup>
		<col width="20%" /><col />
	</colgroup>
	<tbody>	
        <tr>
			<th scope="row" >이름</th>			
			<td><input type="text" size="20" /></td>
		</tr>
        <tr>
			<th scope="row" >아이디</th>			
			<td>
					<input type="text" size="20" /> <span>공백 없는 영문, 숫자 포함 6-20자</span>
					<span id="id_info" class="small"></span>
			</td>
		</tr>
        <tr>
			<th scope="row" >비밀번호</th>			
			<td><input type="password" size="20"/> <span class="desc">공백 없는 영문, 숫자 포함 6-20자 </span></td>
		</tr>		
		<tr>
			<th scope="row" >비밀번호 확인</th>			
			<td><input type="password" size="20"/> <span class="desc">비밀번호 확인을 위해 한번 더 입력하세요.</span></td>
		</tr>		
		<tr>
			<th scope="row" >닉네임</th>			
			<td><input type="text" maxlength="10" size="20"/></td>
		</tr>
		<tr>
			<th scope="row" class="required">생년월일</th>			
			<td><input type="text" value=""maxlength="10" size="20" readonly/></td>
		</tr>	
        <tr>
			<th scope="row">기념일</th>			
			<td>
				<select>
					<option value="01" >01</option>
					<option value="02" >02</option>
					<option value="03" >03</option>
					<option value="04" >04</option>
					<option value="05" >05</option>
					<option value="06" >06</option>
					<option value="07" >07</option>
					<option value="08" >08</option>
					<option value="09" >09</option>
					<option value="10" >10</option>
					<option value="11" >11</option>
					<option value="12" >12</option>
				</select>&nbsp;월&nbsp;
				<select>
					<option value="01" >01</option>
					<option value="02" >02</option>
					<option value="03" >03</option>
					<option value="04" >04</option>
					<option value="05" >05</option>
					<option value="06" >06</option>
					<option value="07" >07</option>
					<option value="08" >08</option>
					<option value="09" >09</option>
					<option value="10" >10</option>
					<option value="11" >11</option>
					<option value="12" >12</option>
					<option value="13" >13</option>
					<option value="14" >14</option>
					<option value="15" >15</option>
					<option value="16" >16</option>
					<option value="17" >17</option>
					<option value="18" >18</option>
					<option value="19" >19</option>
					<option value="20" >20</option>
					<option value="21" >21</option>
					<option value="22" >22</option>
					<option value="23" >23</option>
					<option value="24" >24</option>
					<option value="25" >25</option>
					<option value="26" >26</option>
					<option value="27" >27</option>
					<option value="28" >28</option>
					<option value="29" >29</option>
					<option value="30" >30</option>
					<option value="31" >31</option>
				</select>&nbsp;일
			</td>
		</tr>

        <tr>
			<th scope="row" >성별</th>			
			<td>
				<label><input type="radio" value="male"  /> 남자</label>
				<label><input type="radio" value="female"    /> 여자</label>
			</td>
		</tr>
		<tr>
			<th scope="row" >이메일</th>			
			<td><input type="text" name="email[0]" value="" size="20" /> @ <input type="text" name="email[1]" value="" size="20" />
			<select>
				<option value="">직접선택</option>
				<option value="naver.com">naver.com</option>
				<option value="nate.com">nate.com</option>
				<option value="dreamwiz.com">dreamwiz.com</option>
				<option value="yahoo.co.kr">yahoo.co.kr</option>
				<option value="empal.com">empal.com</option>
				<option value="unitel.co.kr">unitel.co.kr</option>
				<option value="gmail.com">gmail.com</option>
				<option value="korea.com">korea.com</option>
				<option value="chol.com">chol.com</option>
				<option value="paran.com">paran.com</option>
				<option value="freechal.com">freechal.com</option>
				<option value="hanmail.net">hanmail.net</option>
				<option value="hotmail.com">hotmail.com</option>
			</select> &nbsp;<label class="small"><input type="checkbox" name="mailing" value="Y" /> 정보메일을 수신하겠습니다.</label>
			<div class="pdt10 desc">이메일 수신에 동의하시면 여러가지 할인혜택과 각종 이벤트 정보를 받아보실 수 있습니다.<br />회원가입관련, 주문배송관련 등의 메일은 수신동의와 상관없이 모든 회원에게 발송됩니다.</div></td>
		</tr>

        <tr>
			<th scope="row">전화번호</th>			
			<td><input type="text" size="6" maxlength="4"/> - <input type="text" name="phone[]" value="" size="6"  maxlength="4"/> - <input type="text" name="phone[]" value="" size="6"  maxlength="4"/></td>
		</tr>
		<tr>
			<th scope="row">휴대폰번호</th>			
			<td>
				<input type="text" size="6"  maxlength="4" /> - <input type="text" size="6"  maxlength="4" /> - <input type="text" name="cellphone[]" value="" size="6"  maxlength="4" />
				&nbsp;<label class="small"><input type="checkbox" value="Y" /> SMS를 수신하겠습니다.</label>
				<div>SMS 수신에 동의하시면 여러가지 할인혜택과 각종 이벤트 정보를 받아보실 수 있습니다.<br />회원가입관련, 주문배송관련 등의 SMS는 수신동의와 상관없이 구매 회원에게 발송됩니다.</div>
			</td>
		</tr>
		<tr>
			<th scope="row">주소</th>			
			<td>
				<div>
					<input type="text" value="" size="15" readonly/> <a>주소찾기</a>
				</div>
				<input type="hidden" value=""/><input type="text" name="address" value="" class="address " size="40" readonly/> <input type="text" class="address_street hide" name="address_street" value="" size="35" readonly/> <input type="text" name="address_detail" value="" size="40" />
				<div></div>
			</td>
		</tr>
		<tr>
			<th scope="row">추천인ID</th>			
			<td>
				<input type="text" name="recommend" id="recommend" value="" />
				<button type="button" onclick="chkRecommend('u');" class="btn_move small">확인</button>
				<span id="recommend_return_txt" class="small"></span>
			</td>
		</tr>		
	
	</tbody>
    </FormWarp>
    </Table>
    </>

);