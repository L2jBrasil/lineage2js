module.exports = {
	loginserver: {
		loginFail: {
			REASON_SYSTEM_ERROR: 0x01,
			REASON_PASS_WRONG: 0x02,
			REASON_USER_OR_PASS_WRONG: 0x03,
			REASON_ACCESS_FAILED: 0x04,
			REASON_ACCOUNT_IN_USE: 0x07,
			REASON_ACCOUNT_BANNED: 0x09
		},
		playFail: {
			REASON_SYSTEM_ERROR: 0x01,
			REASON_PASS_WRONG: 0x02,
			REASON_ACCESS_FAILED: 0x04,
			REASON_TOO_MANY_PLAYERS: 0x0f
		}
	},
	gameserver: {
		authLoginFail: {
			REASON_SYSTEM_ERROR: 0x01,
			REASON_PASS_WRONG: 0x02,
			REASON_ACCESS_FAILED: 0x04,
			REASON_ACCOUNT_IN_USE: 0x07,
		},
		characterCreateFail: {
			REASON_CREATION_FAILED: 0x00,
			REASON_TOO_MANY_CHARACTERS: 0x01,
			REASON_NAME_ALREADY_EXISTS: 0x02,
			REASON_16_ENG_CHARS: 0x03
		}
	}
};