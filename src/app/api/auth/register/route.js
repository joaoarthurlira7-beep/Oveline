import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Nome, e-mail e senha são obrigatórios.' },
        { status: 400 }
      );
    }

    // Regras de validação de senha (mínimo 8 caracteres, 1 maiúscula, 1 número)
    if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      return NextResponse.json(
        { message: 'A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e um número.' },
        { status: 400 }
      );
    }

    // Verifica se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'Já existe uma conta vinculada a este e-mail.' },
        { status: 409 }
      );
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 12);

    // Criação do usuário
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: 'Usuário criado com sucesso!', user: { id: user.id, email: user.email, name: user.name } },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro no registro:', error);
    return NextResponse.json(
      { message: 'Erro interno no servidor ao criar a conta.' },
      { status: 500 }
    );
  }
}
