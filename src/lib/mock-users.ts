import { compare } from "bcryptjs";

interface MockUser {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
}

interface SafeMockUser {
  id: string;
  name: string;
  email: string;
}

// 学習用モックユーザー。DBは持たないためここに1ユーザーのみ登録
const MOCK_USERS: MockUser[] = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@example.com",
    passwordHash:
      "$2b$10$G0JTRAKzRsADuXiyXlipmO816dn8CPcivvdhmpC1MwF7wZ4O6v0ai",
  },
];

/**
 * 固定モックユーザーとパスワードを照合する。
 * パスワード平文は返さない。
 * 失敗時は null。
 */
export const verifyMockUser = async (
  email: string,
  password: string,
): Promise<SafeMockUser | null> => {
  const user = MOCK_USERS.find((candidate) => candidate.email === email);

  if (!user) {
    return null;
  }

  const isPasswordValid = await compare(password, user.passwordHash);

  if (!isPasswordValid) {
    return null;
  }

  // 成功時
  // パスワード平文は返さない。
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};
