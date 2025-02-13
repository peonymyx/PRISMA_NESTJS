import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import PrismaService from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async getAllBooks(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }

  async getBookById(id: number): Promise<Book | null> {
    return this.prisma.book.findUnique({ where: { id } });
  }

  async createBook(data: { name: string; price: number; category: string; author: string }): Promise<Book> {
    return this.prisma.book.create({ data });
  }

  async updateBook(id: number, data: { name?: string; price?: number; category?: string; author?: string }): Promise<Book> {
    return this.prisma.book.update({ where: { id }, data });
  }

  async deleteBook(id: number): Promise<Book> {
    return this.prisma.book.delete({ where: { id } });
  }
}
